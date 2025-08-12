const clock = document.querySelector(".clock")
const subClock = document.querySelector(".clockSubtitle")
const subClockSmall = document.querySelector(".clockSubtitleSmall")

SetTime()

async function SetTime() {
	const date = new Date()
	const year = date.getFullYear()
	const isLeapYear = (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
	const day = date.getDate()
	const daysSinceYearStart = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
	const totalDaysInYear = isLeapYear ? 366 : 365
	const daysToYearEnd = totalDaysInYear - daysSinceYearStart
	const dayOfTheWeek = date.getDay()
	const dayOfTheWeekName = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date.dayOfTheWeek);
	const month = date.getMonth()
	const monthName = new Intl.DateTimeFormat("en-US", {month: "long"}).format(date.dayOfTheWeek);
	const monthNameShort = new Intl.DateTimeFormat("en-US", {month: "short"}).format(date.dayOfTheWeek);
	const hour = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const seconds = String(date.getSeconds()).padStart(2, '0')
	const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

	clock.innerText = `${hour}:${minutes}:${seconds}`
	subClock.innerText = `${dayOfTheWeekName}, ${day} ${monthName} ${year}`
	subClockSmall.innerText = `${daysToYearEnd} days before year ends.`

	setTimeout(SetTime, 25)
}
