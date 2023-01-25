let sloganText = ['front-end beginner!', 'stackoverflow searcher!', 'future master of code!'];
let sloganPlace = document.getElementById('slogan-place');
let loopNum = 0;
let period = 2000;
let textWritten = '';
let isDeleting = false;

function typeSlogan() {
    let i = loopNum % sloganText.length;
    let fullText = sloganText[i];

    if (isDeleting) {
        textWritten = fullText.substring(0, textWritten.length - 1);
    } else {
        textWritten = fullText.substring(0, textWritten.length + 1);
    }

    sloganPlace.innerHTML = '<span id="slogan-place">' + textWritten + '</span>';

    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
        delta /= 2;
    }

    if (!isDeleting && textWritten === fullText) {
        delta = period;
        isDeleting = true;
    } else if (isDeleting && textWritten === '') {
        isDeleting = false;
        loopNum++;
        delta = 500;
    }

    setTimeout(typeSlogan, delta);
}

window.onload = function () {
    let css = document.createElement("style");
    css.innerHTML = "#slogan-place { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    typeSlogan();
};