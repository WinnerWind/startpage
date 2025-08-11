const bookmarks = [
	{
		"Title": "Search",
		"Google":"https://google.com",
	},
	{
		"Title": "Social Media",
		"Reddit": "N/A",
	},
	{
		"Title": "Social Media",
		"Reddit": "N/A",
	},
	{
		"Title": "Social Media",
		"Reddit": "N/A",
	}
]
const bookmarksContainer = ".bookmarksContainer"

LoadBookmarks()

function LoadBookmarks() {
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
