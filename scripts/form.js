/***********************************************
 * WDD 131 - Dynamic Web Fundamentals
 * Week 05 - Product Review Form
 * Author: Alagbaoso Solomon Ginikachukwu
 ***********************************************/

// Product Data
const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Populate Product Select Element
    // -------------------------------

    const productSelect = document.querySelector("#productName");

    products.forEach(product => {

        const option = document.createElement("option");

        // Assignment requirement:
        // value = product id
        // text = product name

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);

    });

    // -------------------------------
    // Footer Information
    // -------------------------------

    const currentYear = document.querySelector("#currentyear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const lastModified = document.querySelector("#lastModified");

    if (lastModified) {
        lastModified.textContent =
            `Last Modified: ${document.lastModified}`;
    }

});