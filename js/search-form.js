var searchButton = document.querySelector(".search-1");
var searchForm = document.querySelector(".search");
var startSearch = document.querySelector(".search-body")
var visitDates = document.querySelector(".booking-date");


searchButton.addEventListener("click", function (evt) {
  if (searchForm.classList.contains("search-body")) {
    evt.preventDefault();
    searchForm.classList.remove("search-body");
    searchForm.classList.remove("search-error");
  } else {evt.preventDefault();
    searchForm.classList.add("search-body");
  }
});
startSearch.addEventListener("submit", function (evt) {
    if (!visitDates.value) {
        evt.preventDefault();
        searchForm.classList.add("search-error");
    }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("search-body")) {
      evt.preventDefault();
      searchForm.classList.remove("search-body");
      searchForm.classList.remove("search-error");
    }
  }
});