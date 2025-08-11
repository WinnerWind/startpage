const clock = document.querySelector(".clock")

SetTime()

async function SetTime() {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth()
	const hour = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const seconds = String(date.getSeconds()).padStart(2, '0')
	const milliseconds = String(date.getMilliseconds()).padStart(3, '0')
	const outputDate = `${hour}:${minutes}:${seconds}::${milliseconds}`
	clock.innerText = outputDate
	ScheduleTimeSet()
}

async function ScheduleTimeSet() {
	setTimeout(SetTime, 25)
}
