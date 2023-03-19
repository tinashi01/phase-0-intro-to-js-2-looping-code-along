const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event = "surprise") {
    const newNames = [];
    for (let i=0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newNames.push(message);
    }
    return newNames;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i--);
    }
}
