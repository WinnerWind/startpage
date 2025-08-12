const bookmarksContainer = ".bookmarksContainer"

LoadBookmarks()

async function LoadBookmarks() {
	let bookmarks = []
	try {
		const response = await fetch("data/bookmarks.json");
	    if (!response.ok) {
			throw new Error("HTTP error " + response.status);
	    }
	    bookmarks = await response.json();
	} catch (error) {
	  console.error('Error fetching JSON:', error);
	}

	bookmarks.forEach((dictionary) => {
		const newPage = document.createElement("div");
		newPage.classList.add("bookmarksPage");

		const heading = document.createElement("h1")
		heading.textContent = dictionary["Title"]
		newPage.appendChild(heading)

		delete dictionary["Title"]
		const ul = document.createElement("ul")
		Object.keys(dictionary).forEach((siteName) => {
			const siteURL = dictionary[siteName]

			const li = document.createElement("li");
			const HTMLlink = document.createElement("a")
			HTMLlink.href = siteURL
			HTMLlink.textContent = siteName

			li.appendChild(HTMLlink)
			ul.appendChild(li)
		})

		newPage.appendChild(ul)
		document.querySelector(bookmarksContainer).appendChild(newPage)
	})
}
