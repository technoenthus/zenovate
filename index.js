document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const speed = 50; // Adjust speed of counting animation

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target').replace('+', ''); // Remove "+" for calculations
        const hasPlus = counter.hasAttribute('data-has-plus'); // Check if "+" sign is required
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
            const current = +counter.innerText.replace('+', ''); // Remove "+" during animation
            if (current < target) {
                counter.innerText = hasPlus ? `${current + increment}+` : current + increment;
                setTimeout(updateCount, 15); // Adjust time delay for smoother animation
            } else {
                counter.innerText = hasPlus ? `${target}+` : target; // Ensure "+" is added for final value
            }
        };
        updateCount();
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    animateCounter(counter);
                    observer.unobserve(counter); // Stop observing once animated
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    counters.forEach((counter) => observer.observe(counter));
});
