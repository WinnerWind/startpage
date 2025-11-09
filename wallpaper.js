SetBackground()
const fallBackPath = "img/fallback.gif"

async function SetBackground() {
	let backgrounds = []
	try {
		const response = await fetch("data/wallpapers.json");
		if (response.ok) {
			backgrounds = await response.json()
		}
	} catch (error) {
		console.log("Error getting wallpapers", error)
	}

	if (! (backgrounds == [])) { // not empty
		let img = new Image();
		let monthIndex = new Date().getMonth()
		let fullPath = "img/"+backgrounds[monthIndex]
		img.onload = function() {
			document.documentElement.style.setProperty('--bg-image', 'url('+fullPath+')')
		}
		img.onerror = function() {
			console.log("Failed to load image: ", backgrounds[monthIndex])
			document.documentElement.style.setProperty('--bg-image', 'url('+fallBackPath+')')
		}
		img.src = fullPath
		} else { return }
}
