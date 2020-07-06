var searchButton = document.querySelector(".search-1");
var searchForm = document.querySelector(".search-body");
var visitDates = searchForm.querySelector(".booking-date");


searchButton.addEventListener("click", function (evt) {
  if (searchForm.classList.contains("search-body-show")) {
    evt.preventDefault();
    searchForm.classList.remove("search-body-show");
  } else {
    evt.preventDefault();
    searchForm.classList.add("search-body-show");
  }
});
searchForm.addEventListener("submit", function (evt) {
  if (!visitDates.value) {
      evt.preventDefault();
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("search-body-show")) {
      evt.preventDefault();
      searchForm.classList.remove("search-body-show");
    }
  }
});
