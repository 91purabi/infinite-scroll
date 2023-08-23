// script.js

const itemsPerPage = 10;
let currentPage = 1;
let isLoading = false;

const contentList = document.getElementById("content-list");
const loadingIndicator = document.getElementById("loading-indicator");

function loadMoreContent() {
    if (isLoading) return;

    isLoading = true;
    loadingIndicator.style.display = "block";

    // Simulated API call or data retrieval
    setTimeout(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < endIndex; i++) {
            const li = document.createElement("li");
            li.textContent = `Item ${i + 1}`;
            contentList.appendChild(li);
        }

        currentPage++;
        isLoading = false;
        loadingIndicator.style.display = "none";
    }, 1000); // Simulated delay for demonstration purposes
}

// Intersection Observer to detect when to load more content
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
        loadMoreContent();
    }
});

observer.observe(loadingIndicator);

// Initial content load
loadMoreContent();
