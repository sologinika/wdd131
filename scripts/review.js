// ********************************************
// WDD131 - Week 5 Product Review
// review.js
// ********************************************

document.addEventListener("DOMContentLoaded", () => {

    // ---------- Review Counter ----------

    const reviewCountElement = document.querySelector("#reviewCount");

    // Get the current number of reviews
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    // Increase by one
    reviewCount++;

    // Save updated count
    localStorage.setItem("reviewCount", reviewCount);

    // Display updated count
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }

    // ---------- Footer ----------

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