window.onscroll = function () {
    let header = document.getElementsByTagName("header")[0];
    let scroll = window.scrollY;

    if (scroll >= 200) {
        header.classList.add("header-visible");
    } else {
        header.classList.remove("header-visible");
    }
};

// var burgers = document.querySelectorAll('.burger-menu');
// burgers.forEach(function (el) { return el.addEventListener('click', function (e) { return burgers.forEach(function (el) { return el.classList.toggle("active"); }); }); });





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


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bar = entry.target.querySelector('.bar');

        if (entry.isIntersecting) {
            bar.style.width = bar.dataset.percentage;
            return;
        }

        bar.style.width = "0";
    });
});

document.querySelectorAll('.skill-bar-container').forEach(element => {
    observer.observe(element);
});



// const changeSliderPage = (nextDot, newFactsStartIndex) => {
//     const allFacts = Array.from(document.querySelectorAll('.fact-box'));
//     const openedFacts = allFacts.filter(item => window.getComputedStyle(item, null).display == 'flex');

//     const activeDot = document.getElementsByClassName('slider-dot-active')[0];
//     activeDot.classList.remove('slider-dot-active');
//     nextDot.classList.add('slider-dot-active');

//     const factsToOpen = allFacts.slice(newFactsStartIndex, newFactsStartIndex + openedFacts.length);
//     openedFacts.forEach(item => item.style.display = "none");
//     factsToOpen.forEach(item => item.style.display = "flex");
// };

const changeSliderPage = (nextDot, newFactsStartIndex) => {
    const allFacts = Array.from(document.querySelectorAll('.fact-box'));
    const openedFacts = allFacts.filter(item => window.getComputedStyle(item, null).display == 'flex');

    const activeDot = document.getElementsByClassName('slider-dot-active')[0];
    activeDot.classList.remove('slider-dot-active');
    nextDot.classList.add('slider-dot-active');

    openedFacts.forEach(item => item.style.display = "none");
    const factsToOpen = allFacts.slice(newFactsStartIndex, newFactsStartIndex + openedFacts.length);
    factsToOpen.forEach(item => item.style.display = "flex");
};

document.querySelectorAll('.slider-dot').forEach(item => item.addEventListener('click', (event) => {
    const clickedDot = event.currentTarget;
    const clickedDotIndex = clickedDot.dataset.index;

    const allFacts = Array.from(document.querySelectorAll('.fact-box'));
    const openedFacts = allFacts.filter(item => window.getComputedStyle(item, null).display == 'flex');

    const newFactsStartIndex = clickedDotIndex * openedFacts.length;

    changeSliderPage(clickedDot, newFactsStartIndex);
}));

document.querySelector('.slider-arrow-right').addEventListener('click', () => {
    const allFacts = Array.from(document.querySelectorAll('.fact-box'));
    const openedFacts = allFacts.filter(item => window.getComputedStyle(item, null).display == 'flex');
    const openedFactsIndexes = openedFacts.map(item => item.dataset.index);

    const lastOppendFactIndex = +openedFactsIndexes[openedFactsIndexes.length - 1];
    const newFactsStartIndex = (lastOppendFactIndex + 1) % allFacts.length;
    
    const nextDotIndex = newFactsStartIndex / openedFacts.length;
    const nextDot = document.getElementsByClassName('slider-dot')[nextDotIndex];

    changeSliderPage(nextDot, newFactsStartIndex);
});


document.querySelector('.slider-arrow-left').addEventListener('click', () => {
    const allFacts = Array.from(document.querySelectorAll('.fact-box'));
    const openedFacts = allFacts.filter(item => window.getComputedStyle(item, null).display == 'flex');
    const openedFactsIndexes = openedFacts.map(item => item.dataset.index);

    const openedFactsCount = openedFacts.length;

    const firstOppendFactIndex = +openedFactsIndexes[0];
    const newFactsStartIndex = (firstOppendFactIndex - openedFactsCount + allFacts.length) % allFacts.length;

    const nextDotIndex = newFactsStartIndex / openedFactsCount;
    const nextDot = document.getElementsByClassName('slider-dot')[nextDotIndex];

    changeSliderPage(nextDot, newFactsStartIndex);
});
