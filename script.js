const accessKey = "Fq7j10IvV8sFO6JavYBZHbCbJA9-6um1XfHmq3iFNkE";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let page = 1;

async function searchImages(query) {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;


    try {
        const response = await fetch(url);
        const data = await response.json();
        updateUI(data.results);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function updateUI(results) {
    if (page === 1) {
        searchResults.innerHTML = "";
    }

    results.forEach((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");

        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages(inputEl.value);
});

showMore.addEventListener("click", () => {
    searchImages(inputEl.value);
});
