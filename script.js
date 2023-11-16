const accessKey = "Fq7j10IvV8sFO6JavYBZHbCbJA9-6um1XfHmq3iFNkE"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImage() {
    inputData = inputEl.ariaValueMax;
    const url = `http://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    results.map
}
