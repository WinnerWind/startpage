const searchBarFormSelector = ".searchBarBackground"
const searchInputSelector = "searchBar"
const toggleButtonSelector = ".toggleButton"
const toggleButtonActiveSelector = ".toggleButton.active"

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector(searchBarFormSelector);
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const activeToggleButton = document.querySelector(toggleButtonActiveSelector)
      Search(formData.get(searchInputSelector), activeToggleButton.textContent.trim());
    });
  }
});

// Deals with toggleable buttons that can only be selected one at a time.
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll(toggleButtonSelector);
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
        // Search if a query is given and a button is pressed.
        const searchForm = document.querySelector(searchBarFormSelector)
        const formData = new FormData(searchForm)
        let activeToggleButton = document.querySelector(toggleButtonActiveSelector)

        if (formData.get(searchInputSelector) && activeToggleButton) {
          Search(formData.get(searchInputSelector), activeToggleButton.textContent.trim())
        }
    });
  });
});


function Search(query, engine) {
  let url = "https://www.google.com/search?q="
  const urls = {
    'Google' : "https://www.google.com/search?q=",
    'SearXNG' : "https://searxng.site/search?q=",
    'Bing' : "https://www.bing.com/search?q=",
    'Perplexity' : "https://www.perplexity.ai/search?q="
  }
  url = urls[engine] + query
  window.open(url, "_self")
}
