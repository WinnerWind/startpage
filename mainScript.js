const searchBarFormSelector = ".searchBarBackground"
const searchInputSelector = "searchBar"

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector(searchBarFormSelector);
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      Search(formData.get(searchInputSelector));
    });
  }
});

function Search(query) {
  window.open("https://www.google.com/search?q="+query, "_self")
}
