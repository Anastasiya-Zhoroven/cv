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
