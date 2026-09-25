const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");
const backToTop = document.querySelector("[data-back-to-top]");
const navigationLinks = [...document.querySelectorAll(".primary-nav a[href^='#']")];
const sections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

const closeMenu = () => {
    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
    menuToggle.querySelector("use")?.setAttribute("href", "assets/icons.svg#menu");
};

const toggleMenu = () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("is-menu-open", !isOpen);
    menuToggle.querySelector("use")?.setAttribute("href", isOpen ? "assets/icons.svg#menu" : "assets/icons.svg#close");
};

const updateScrollState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
    backToTop?.classList.toggle("is-visible", window.scrollY > 700);
};

const updateActiveNavigation = () => {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let activeId = "";

    sections.forEach((section) => {
        if (section.offsetTop <= marker) {
            activeId = section.id;
        }
    });

    navigationLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
};

export const initNavigation = () => {
    menuToggle?.addEventListener("click", toggleMenu);
    navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    backToTop?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        updateScrollState();
        updateActiveNavigation();
    }, { passive: true });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 980) {
            closeMenu();
        }
    });

    updateScrollState();
    updateActiveNavigation();
    document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
};
