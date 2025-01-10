document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Add your logic here to handle form submission (e.g., sending an email)
    alert("Message sent successfully!");
});

// Responsive navigation menu
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
});
