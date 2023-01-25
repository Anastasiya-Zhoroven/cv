const header = document.getElementsByTagName("header")[0];
window.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll >= 200) {
        header.classList.add("header-visible");
    } else {
        header.classList.remove("header-visible");
    }
};


document.querySelector('.burger-menu').addEventListener('click', event => {
    if (header.classList.contains('side-bar-visible')) {
        header.classList.remove("side-bar-visible");
    } else {
        header.classList.add("side-bar-visible");
    }
});