// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
(function () {
    emailjs.init("bafPK276nraMhkN3b");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_7qwuv3k",
        "template_b4tvdts",
        this
    ).then(
        () => {
            alert("Message sent successfully!");
            this.reset();
        },
        (error) => {
            alert("Failed to send message!");
            console.log(error);
        }
    );
});

// Simple animation on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        let pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
