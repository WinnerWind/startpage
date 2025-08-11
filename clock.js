const clock = document.querySelector(".clock")
const subClock = document.querySelector(".clockSubtitle")

SetTime()

async function SetTime() {
	const date = new Date()
	const year = date.getFullYear()
	const day = date.getDate()
	const dayOfTheWeek = date.getDay()
	const dayOfTheWeekName = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date.dayOfTheWeek);
	const month = date.getMonth()
	const monthName = new Intl.DateTimeFormat("en-US", {month: "long"}).format(date.dayOfTheWeek);
	const monthNameShort = new Intl.DateTimeFormat("en-US", {month: "short"}).format(date.dayOfTheWeek);
	const hour = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const seconds = String(date.getSeconds()).padStart(2, '0')
	const milliseconds = String(date.getMilliseconds()).padStart(3, '0')


	clock.innerText = `${hour}:${minutes}:${seconds}::${milliseconds}`
	subClock.innerText = `${dayOfTheWeekName}, ${day} ${monthName} ${year}`

	setTimeout(SetTime, 25)
}
