function makeArray() {
    let array = [];

    for(let i = 1; i < 61; i++) { 
        array[i-1] = i;
    }
    return array;
}

//Handily enumerated at https://stackoverflow.com/a/6274381
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;
}

function begin() {
    var canvas = document.getElementById("displayCanvas");
    var ctx = canvas.getContext("2d");
    var shuffledArray = shuffle(makeArray());
    var valInQuestion;

    debugger;

    ctx.strokeStyle = "#000000";

    // origin is upper left of canvas with down and right being the positive direction
    // rect x y is the upper left corner of the rect
    // (x, y, width, height)
    for(let i = 0; i < 60; i++) {
        valInQuestion = shuffledArray[i]

        ctx.strokeRect(i * 10, 700 - (valInQuestion * 10),10,10 * valInQuestion);

    }
}