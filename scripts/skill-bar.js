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