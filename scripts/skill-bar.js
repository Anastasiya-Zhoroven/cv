const callback = entries => {
    entries.forEach(entry => {
        const bar = entry.target.querySelector('.bar');

        if (entry.isIntersecting) {
            bar.style.width = bar.dataset.percentage;
            return;
        }

        bar.style.width = "0";
    });
};

const observer = new IntersectionObserver(callback);

document.querySelectorAll('.skill-bar-container').forEach(element => {
    observer.observe(element);
});