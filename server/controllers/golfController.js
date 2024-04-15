require("../models/database");
const Scores = require("../models/Scores");

exports.homepage = async (req, res) => {
  res.render("index");
};

exports.draft = async (req, res) => {
  res.render("draft");
};

exports.history = async (req, res) => {
  res.render("history");
};

exports.tournament = async (req, res) => {
  res.render("tournament");
};

exports.seasonal = async (req, res) => {
  try {
    let players = await Scores.find();
    if (players.length < 2) {
      players.push["No players Registered"];
    }
    console.log(players);
    res.render("seasonal", { players });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.addUser = async (req, res) => {
  try {
    const newUser = new Scores({
      name: req.body.name,
      password: req.body.password,
      total: 0,
    });

    await newUser.save();

    let players = await Scores.find();
    res.render("seasonal", { players });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.addScores = async (req, res) => {
  try {
    const { one, two, three, four, five, six, seven, eight, nine, password2 } =
      req.body;

    const user = await Scores.findOne({ password: password2 });
    let players = await Scores.find();
    // Validate inputs
    const inputs = [one, two, three, four, five, six, seven, eight, nine];
    if (
      inputs.some(
        (input) =>
          input === null ||
          isNaN(parseInt(input, 10)) ||
          parseInt(input, 10) < 0
      )
    ) {
      return res.render("seasonal", { players });
    }

    if (!user) {
      return res.status(404).send("User not found");
    }

    const newArray = inputs.map((input) => parseInt(input, 10));
    const total = newArray.reduce((acc, curr) => acc + curr, 0);

    user.total += total;
    user.scores.push(...newArray);

    await user.save();

    players = await Scores.find();

    res.render("seasonal", { players });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
