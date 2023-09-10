






exports.homepage = async(req, res) => {

    res.render('index');
}

exports.draft = async(req, res) => {
    res.render('draft');
}

exports.history = async(req, res) => {
    res.render('history');
}