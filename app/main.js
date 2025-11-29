const tracks= [
    {title: 1, url: "https://musicfun"},
    {title: 2, url: "http://localhost:8080"},
    {title: 3, url: "http://localhost:8080"},
    {title: 4, url: "http://localhost:8080"},
];

const rootEl = document.querySelector("#root");
const headerEl = document.createElement("h1");
headerEl.append('Title root1')
rootEl.append(headerEl)

const listEl = document.createElement("ul");
tracks.forEach((track)=>{
    const trackEl = document.createElement("li");
    const trackTitleEl = document.createElement("div");
    trackTitleEl.append(track.title)
    trackEl.append(trackTitleEl)
    const trackPlayerEl = document.createElement("audio");
    trackPlayerEl.controls = true;
    trackPlayerEl.src = track.url;
    trackEl.append(trackPlayerEl)
    listEl.append(trackEl)
})

rootEl.append(listEl)