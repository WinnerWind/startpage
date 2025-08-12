const searchBarFormSelector = ".searchBarBackground"
const searchInputSelector = "searchBar"
const searchInputSelectorClass = ".searchBar"
const toggleButtonSelector = ".toggleButton"
const toggleButtonActiveSelector = ".toggleButton.active"
const engineContainerSelector = ".engineButtons"

// Deal with form data
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

// let urls = {}
//
// async function GetURLs() {
//   try {
//       const response = await fetch("data/engines.json");
//       if (!response.ok) {
//           throw new Error("HTTP error " + response.status);
//       }
//       urls = await response.json();
//   } catch (error) {
//     console.error('Error fetching JSON:', error);
//   }
// }
let urls = {
    "Google" : "https://www.google.com/search?q=",
    "Wikipedia" : "https://en.wikipedia.org/wiki/Special:Search?search=",
    "SearXNG" : "https://searxng.site/search?q=",
    "辞書" : "https://jisho.org/search/",
    "Perplexity" : "https://www.perplexity.ai/search?q="
}



// Add all the engine buttons
// Deal with toggle functionality
document.addEventListener('DOMContentLoaded', async function() {
  // await GetURLs()
  urlNames = Object.keys(urls)
  const engineContainer = document.querySelector(engineContainerSelector)

  urlNames.forEach((name, idx) => {
    let newButton = document.createElement("button")
    newButton.classList.add("toggleButton")
    if (idx === 0) {
      newButton.classList.add("active")
    }
    newButton.type = "button"
    newButton.textContent = name

    engineContainer.appendChild(newButton)
  })

  // Deal with toggle functionality
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

// Change the placeholder text
document.addEventListener('DOMContentLoaded', async function() {
  let searchInput = document.querySelector(searchInputSelectorClass)
  // let quotes = []
  // try {
  //     const response = await fetch("data/quotes.json");
  //     if (!response.ok) {
  //         throw new Error("HTTP error " + response.status);
  //     }
  //     quotes = await response.json();
  // } catch (error) {
  //   console.error('Error fetching JSON:', error);
  // }
  let quotes = [
	"Change the world or die trying",
	"Hmmm, what shall we search today?",
	"Have a good day!",
	"Syntax Error!",
	"I'm feeling unlucky",
	"amogus",
	"Beep Boop.",
	"0 results in 0 seconds.",
	"heck yeah!",
	"The internet is a limitless directory..."
  ]
  const randomIndex = Math.floor(Math.random() * quotes.length);
  searchInput.placeholder = quotes[randomIndex]
});

function Search(query, engine) {
  let url = urls[engine] + query
  window.open(url, "_self")
}
