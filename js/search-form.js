var searchButton = document.querySelector(".search-1");
var searchForm = document.querySelector(".search-body");
var arrivalDate = searchForm.querySelector(".arrival");
var departureDate = searchForm.querySelector(".departure");


searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-body-show");
    searchForm.classList.remove("form-error");
});
searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value||!departureDate.value) {
      evt.preventDefault();
      searchForm.classList.remove("form-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("form-error");
  } 
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("search-body-show")) {
      evt.preventDefault();
      searchForm.classList.remove("search-body-show");
      searchForm.classList.remove("form-error");
    }
  }
});
