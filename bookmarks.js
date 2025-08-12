const bookmarksContainer = ".bookmarksContainer"
const bookmarks = [
	{
		"Title": "Code",
		"Github": "https://github.com",
		"itch.io": "https://itch.io"
	},
	{
		"Title": "Social Media",
		"Reddit": "https://reddit.com",
		"Instagram": "https://instagram.com",
		"Twitter": "https://x.com"
	},
	{
		"Title": "The High Seas",
		"nyaa" : "https://nyaa.si",
		"fmhy" : "https://fmhy.net",
		"lucida.to" : "https://lucida.to",
		"Anna's Archive": "https://annas-archive.org",
		"squid.wtf" : "https://squid.wtf"
	}
]


LoadBookmarks()

async function LoadBookmarks() {
	// let bookmarks = []
	// try {
	// 	const response = await fetch("data/bookmarks.json");
	//     if (!response.ok) {
	// 		throw new Error("HTTP error " + response.status);
	//     }
	//     bookmarks = await response.json();
	// } catch (error) {
	//   console.error('Error fetching JSON:', error);
	// }

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
