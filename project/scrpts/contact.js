/* ===========================================================
   GINSOLO VENTURES
   contact.js
   Contact Page JavaScript
=========================================================== */

/* ===========================================================
   SERVICE DATA
=========================================================== */

const servicePrices = [

    {
        service: "Granite Haulage",
        price: 180000
    },

    {
        service: "Sharp Sand Delivery",
        price: 150000
    },

    {
        service: "Laterite Supply",
        price: 160000
    },

    {
        service: "Truck Hire",
        price: 200000
    },

    {
        service: "Construction Logistics",
        price: 250000
    }

];

/* ===========================================================
   DOM ELEMENTS
=========================================================== */

const form = document.querySelector("#quoteForm");
const serviceSelect = document.querySelector("#service");
const estimate = document.querySelector("#estimate");
const confirmation = document.querySelector("#confirmationMessage");

/* ===========================================================
   DISPLAY PRICE ESTIMATE
=========================================================== */

function displayEstimate() {

    if (!serviceSelect || !estimate) return;

    const selected = servicePrices.find(item =>
        item.service === serviceSelect.value
    );

    if (selected) {

        estimate.innerHTML = `
            <strong>Estimated Starting Price:</strong>
            ₦${selected.price.toLocaleString()}
        `;

    } else {

        estimate.textContent =
            "Select a service to view the estimated starting price.";

    }

}

/* ===========================================================
   VALIDATE FORM
=========================================================== */

function validateForm() {

    const fullname = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const service = document.querySelector("#service").value;
    const location = document.querySelector("#location").value.trim();

    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        service === "" ||
        location === ""
    ) {

        return false;

    }

    return true;

}

/* ===========================================================
   PROCESS FORM
=========================================================== */

function submitQuote(event) {

    event.preventDefault();

    if (!validateForm()) {

        confirmation.innerHTML = `
            <p class="error">
                Please complete all required fields before submitting.
            </p>
        `;

        return;

    }

    const fullname =
        document.querySelector("#fullname").value;

    const service =
        document.querySelector("#service").value;

    confirmation.innerHTML = `

        <div class="success-message">

            <h3>Quotation Request Submitted!</h3>

            <p>

                Thank you,
                <strong>${fullname}</strong>.

            </p>

            <p>

                Your request for
                <strong>${service}</strong>
                has been received successfully.

            </p>

            <p>

                Our customer service team will
                contact you within
                <strong>24 hours</strong>.

            </p>

        </div>

    `;

    form.reset();

    estimate.textContent = "";

}

/* ===========================================================
   BUSINESS HOURS STATUS
=========================================================== */

function displayBusinessStatus() {

    const status = document.querySelector("#businessStatus");

    if (!status) return;

    const hour = new Date().getHours();

    if (hour >= 8 && hour < 18) {

        status.innerHTML = `
            🟢 <strong>We are currently OPEN.</strong>
        `;

    } else {

        status.innerHTML = `
            🔴 <strong>We are currently CLOSED.</strong><br>
            Business Hours: Monday–Friday (8:00 AM – 6:00 PM)
        `;

    }

}

/* ===========================================================
   POPULATE SERVICE LIST (OPTIONAL)
=========================================================== */

function listServices() {

    console.log("Available Services:");

    servicePrices.forEach(item => {

        console.log(`${item.service} - ₦${item.price.toLocaleString()}`);

    });

}

/* ===========================================================
   EVENT LISTENERS
=========================================================== */

if (serviceSelect) {

    serviceSelect.addEventListener("change", displayEstimate);

}

if (form) {

    form.addEventListener("submit", submitQuote);

}

/* ===========================================================
   INITIALIZE
=========================================================== */

displayEstimate();

displayBusinessStatus();

listServices();s