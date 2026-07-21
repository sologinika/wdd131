// ======================================
// WDD 131 - Filtered Temple Album
// Author: Alagbaoso Solomon Ginikachukwu
// ======================================

// -------------------------------
// Temple Array (10 Objects)
// -------------------------------

const temples = [
{
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},

{
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},

{
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},

{
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

{
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},

{
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

// Additional Temples

{
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-36840-main.jpg"
},

{
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-40613-main.jpg"
},

{
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-37731-main.jpg"
}

];

// ------------------------------------
// Select Elements
// ------------------------------------

const container = document.querySelector("#templeContainer");

// ------------------------------------
// Create Temple Cards
// ------------------------------------

function displayTemples(templeList) {

    container.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("article");
        card.classList.add("temple-card");

        card.innerHTML = `
            <img src="${temple.imageUrl}"
                 alt="${temple.templeName}"
                 loading="lazy">

            <div class="card-content">

                <h3>${temple.templeName}</h3>

                <p><strong>Location:</strong> ${temple.location}</p>

                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

            </div>
        `;

        container.appendChild(card);

    });

}

// ------------------------------------
// Display All Temples
// ------------------------------------

displayTemples(temples);

// ------------------------------------
// Hamburger Menu
// ------------------------------------

const menuButton = document.querySelector("#menuButton");

const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});

// ------------------------------------
// Footer Year
// ------------------------------------

document.querySelector("#currentYear").textContent =
new Date().getFullYear();

// ------------------------------------
// Last Modified
// ------------------------------------

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// ------------------------------------
// Home Filter
// ------------------------------------

document.querySelector("#home").addEventListener("click", () => {

    displayTemples(temples);

});

// ------------------------------------
// Old Filter
// Before 1900
// ------------------------------------

document.querySelector("#old").addEventListener("click", () => {

    const oldTemples = temples.filter((temple) => {

        const year = parseInt(temple.dedicated);

        return year < 1900;

    });

    displayTemples(oldTemples);

});

// ------------------------------------
// New Filter
// After 2000
// ------------------------------------

document.querySelector("#new").addEventListener("click", () => {

    const newTemples = temples.filter((temple) => {

        const year = parseInt(temple.dedicated);

        return year > 2000;

    });

    displayTemples(newTemples);

});

// ======================================================
// LARGE FILTER
// Display temples larger than 90,000 square feet
// ======================================================

const largeButton = document.querySelector("#large");

largeButton.addEventListener("click", () => {

    const largeTemples = temples.filter((temple) => temple.area > 90000);

    displayTemples(largeTemples);

});


// ======================================================
// SMALL FILTER
// Display temples smaller than 10,000 square feet
// ======================================================

const smallButton = document.querySelector("#small");

smallButton.addEventListener("click", () => {

    const smallTemples = temples.filter((temple) => temple.area < 10000);

    displayTemples(smallTemples);

});


// ======================================================
// OPTIONAL: Close Mobile Navigation After Selecting Filter
// ======================================================

const navButtons = document.querySelectorAll("#navigation button");

navButtons.forEach((button) => {

    button.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});


// ======================================================
// OPTIONAL: Highlight Active Navigation Button
// ======================================================

navButtons.forEach((button) => {

    button.addEventListener("click", () => {

        navButtons.forEach((btn) => btn.classList.remove("active"));

        button.classList.add("active");

    });

});


// ======================================================
// displayTemples() already uses:
// - Template Literals
// - Lazy Loading
// - DOM Manipulation
//
// Example:
//
// card.innerHTML = `
//     <img
//         src="${temple.imageUrl}"
//         alt="${temple.templeName}"
//         loading="lazy">
//
//     <div class="card-content">
//         <h3>${temple.templeName}</h3>
//         <p><strong>Location:</strong> ${temple.location}</p>
//         <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
//         <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
//     </div>
// `;
// =====================================================