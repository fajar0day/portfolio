export const initReveal = () => {
    const revealElements = [...document.querySelectorAll(".reveal")];
    const groups = new Map();

    revealElements.forEach((element) => {
        const group = element.parentElement;
        const items = groups.get(group) ?? [];
        items.push(element);
        groups.set(group, items);
    });

    groups.forEach((items) => {
        items.slice(0, 4).forEach((item, index) => {
            item.classList.add(`reveal-delay-${index}`);
        });
    });

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
    });

    revealElements.forEach((element) => observer.observe(element));
};
