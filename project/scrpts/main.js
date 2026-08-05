/* ===========================================================
   GINSOLO VENTURES
   WDD 131 FINAL PROJECT
   main.js
=========================================================== */

/* ===========================================================
   MOBILE NAVIGATION
=========================================================== */

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.textContent =
            navigation.classList.contains("open")
                ? "✖"
                : "☰";

    });

}

/* ===========================================================
   FOOTER INFORMATION
=========================================================== */

const year = document.querySelector("#currentYear");

if (year) {

    year.textContent = new Date().getFullYear();

}

const modified = document.querySelector("#lastModified");

if (modified) {

    modified.textContent = document.lastModified;

}

/* ===========================================================
   SERVICES DATA (OBJECTS + ARRAY)
=========================================================== */

const services = [

    {
        id: 1,
        name: "Granite Haulage",
        category: "Transportation",
        price: 180000
    },

    {
        id: 2,
        name: "Sharp Sand Delivery",
        category: "Transportation",
        price: 150000
    },

    {
        id: 3,
        name: "Laterite Supply",
        category: "Construction",
        price: 160000
    },

    {
        id: 4,
        name: "Truck Hire",
        category: "Logistics",
        price: 200000
    },

    {
        id: 5,
        name: "Construction Logistics",
        category: "Logistics",
        price: 250000
    }

];

/* ===========================================================
   DISPLAY SERVICES
=========================================================== */

function displayServices() {

    const container = document.querySelector("#serviceCards");

    if (!container) return;

    container.innerHTML = "";

    services.forEach(service => {

        container.innerHTML += `

        <article class="service-card">

            <h3>${service.name}</h3>

            <p>

                Category:
                <strong>${service.category}</strong>

            </p>

            <p>

                Starting From:

                <strong>

                    ₦${service.price.toLocaleString()}

                </strong>

            </p>

        </article>

        `;

    });

}

displayServices();

/* ===========================================================
   FIND A SERVICE
=========================================================== */

function findService(serviceName) {

    return services.find(service =>

        service.name === serviceName

    );

}

/* ===========================================================
   FILTER SERVICES
=========================================================== */

function filterLogisticsServices() {

    return services.filter(service =>

        service.category === "Logistics"

    );

}

/* ===========================================================
   QUOTATION FORM
=========================================================== */

const quoteForm = document.querySelector("#quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", submitQuote);

}

function submitQuote(event) {

    event.preventDefault();

    const fullname =
        document.querySelector("#fullname").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const phone =
        document.querySelector("#phone").value.trim();

    const service =
        document.querySelector("#service").value;

    const location =
        document.querySelector("#location").value.trim();

    const message =
        document.querySelector("#message").value.trim();

    const confirmation =
        document.querySelector("#confirmationMessage");

    /* ===========================================
       CONDITIONAL BRANCHING
    =========================================== */

    if (

        fullname === "" ||

        email === "" ||

        phone === "" ||

        service === "" ||

        location === ""

    ) {

        confirmation.textContent =
            "Please complete all required fields.";

        confirmation.style.color = "red";

        return;

    }

    confirmation.style.color = "green";

    confirmation.innerHTML = `

        <strong>

        Thank you, ${fullname}!

        </strong>

        <br>

        Your request for

        <strong>

        ${service}

        </strong>

        has been received.

        We will contact you shortly using

        ${email} or ${phone}.

    `;

    quoteForm.reset();

}

/* ===========================================================
   ESTIMATE PRICE
=========================================================== */

function estimatePrice(serviceName) {

    const selectedService =

        findService(serviceName);

    if (!selectedService) {

        return "Contact us for pricing.";

    }

    return `

        Estimated starting price:

        ₦${selectedService.price.toLocaleString()}

    `;

}

/* ===========================================================
   DISPLAY ESTIMATE WHEN SERVICE CHANGES
=========================================================== */

const serviceSelect =

document.querySelector("#service");

if (serviceSelect) {

    serviceSelect.addEventListener("change", () => {

        const estimate =

            estimatePrice(serviceSelect.value);

        const estimateBox =

            document.querySelector("#estimate");

        if (estimateBox) {

            estimateBox.textContent = estimate;

        }

    });

}

/* ===========================================================
   CURRENT BUSINESS STATUS
=========================================================== */

function businessStatus() {

    const hour =

        new Date().getHours();

    const status =

        document.querySelector("#businessStatus");

    if (!status) return;

    if (hour >= 8 && hour < 18) {

        status.innerHTML =

            `🟢 We are currently OPEN.`;

    }

    else {

        status.innerHTML =

            `🔴 We are currently CLOSED.`;

    }

}

businessStatus();

/* ===========================================================
   CONSOLE OUTPUT
=========================================================== */

console.log(

    `

    Total Services:

    ${services.length}

    `

);

console.log(

    filterLogisticsServices()

);