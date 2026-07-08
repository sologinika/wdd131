const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    const open = navigation.classList.toggle("open");

    menuButton.textContent = open ? "✖" : "☰";

    menuButton.setAttribute("aria-expanded", open);

});

// Footer

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;