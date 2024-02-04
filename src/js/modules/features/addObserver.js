export function addObserver(trigger, vision = 0.5) {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: vision,
    };
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            const { opacity } = entries[0].target.style;
            if (opacity === 0) {
                return null;
            }
            entries[0].target.style.opacity = 1;
        }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(trigger);
}
