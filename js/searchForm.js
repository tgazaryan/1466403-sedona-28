var searchButton = document.querySelector(".search-1");
var searchForm = document.querySelector(".search");

searchButton.addEventListener("click", function (evt) {
  if (searchForm.classList.contains("search-body")) {
    evt.preventDefault();
    searchForm.classList.remove("search-body");
  } else {searchForm.classList.add("search-body");
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("search-body")) {
      evt.preventDefault();
      searchForm.classList.remove("search-body");
    }
  }
});