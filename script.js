// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! Your message has been sent successfully.");
    document.getElementById("contact-form").reset();
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
