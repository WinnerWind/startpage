# Startpage
A simple and asthetic looking start page.

## Self Hosting
1. Clone this repository
2. Host the `index.html` file using method of choice. Eg. `python3 -m http.server`.
3. Enjoy!

## Customizing
### Visual
1. You can edit `styles.css` to edit the look of the web page. This includes colours, fonts and sizes.

### Clock Format
1. Edit `clock.js` and replace the following lines as appropriate:

```js
clock.innerText = `${hour}:${minutes}:${seconds}`
subClock.innerText = `${dayOfTheWeekName}, ${day} ${monthName} ${year}`
subClockSmall.innerText = `${daysToYearEnd} days before the year ends.`
```

### Search Engines
1. Edit `data/engines.json` and include the URL of your search engine. Note that the query is appending to the end of the URL you provide with no modification.

### Quotes
1. Placeholder text for the search bar can be edited in `data/quotes.json`.

### Bookmarks
1. You can add or remove your own bookmarks by editing `data/bookmarks.json` as appropriate. Note that `bookmarks.json` stores an array of objects, where `"Title"` determines the title of the bookmark card, and all subsequent dictionary entries define both the name and the URL of the bookmark.

## Public Instance
A public instance of this start page can be found at https://assets.winnerwind.in/startpage
