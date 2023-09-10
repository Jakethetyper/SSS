const draft = document.getElementById('draft');
const clear = document.getElementById('clear');
const imageElements = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8')
];

const people = [
    "/img/jake.jpg", "/img/david.jpg", "/img/kev.jpg", "/img/alex.jpg", 
    "/img/isaac.jpg", "/img/jared.jpg", "/img/ben.jpg", "/img/logan.jpg"
];

draft.addEventListener('click', () => {
    let newDraft = people.slice();
    
    // Function to update the image with a delay
    function updateImageWithDelay(index) {
        if (index >= 8) return; // Exit the loop when done
        let randomNumber = Math.floor(Math.random() * newDraft.length);
        imageElements[index].src = newDraft[randomNumber];
        newDraft.splice(randomNumber, 1);
        
        setTimeout(() => {
            updateImageWithDelay(index + 1); // Call the function recursively with the next index
        }, 2000); // Delay in milliseconds (1 second in this example)
    }
    
    updateImageWithDelay(0); // Start updating images with delay
});

clear.addEventListener('click', () => {
    for (let i = 0; i < 8; i++) {
        imageElements[i].src = "";
    }
});





