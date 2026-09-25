const CONTACT_EMAIL = "fajarse142@gmail.com";

export const initContactForm = () => {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("[data-form-status]");

    form?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const subject = encodeURIComponent(`Pesan dari ${name}`);
        const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        status.textContent = "Aplikasi email Anda sedang dibuka.";
    });
};
