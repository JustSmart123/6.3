const articles = document.querySelectorAll("article");

function filterMovies(keyword) {
    articles.forEach(article => {
        if (article.textContent.toLowerCase().includes(keyword.toLowerCase())) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.createElement("input");
    input.placeholder = "Введіть жанр (фентезі, трилер, комедія)...";
    input.style.margin = "10px";
    input.style.padding = "5px";
    document.querySelector("header").appendChild(input);

    input.addEventListener("input", () => {
        filterMovies(input.value);
    });
});
