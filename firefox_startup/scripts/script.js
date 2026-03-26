const form = document.getElementById("searchform");
const input = document.getElementById("searchinput");
const linksul = document.getElementById("links");
const linkbutt = document.getElementById("newLinkbutt");

let links = [
  { name: "Youtube", url: "https://www.youtube.com/" },
  { name: "YTMusic", url: "https://music.youtube.com/" }
];

linkbutt.addEventListener("click", function (e) {

});

function renderList() {
  linksul.innerHTML = "";
  for (const link of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.target = "_blank";
    li.appendChild(a);
    linksul.appendChild(li);
  };
};

renderList();

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let entry = input.value;
  entry = entry.trim();
  if (entry === "") {
    return;
  };
  const safe = encodeURIComponent(entry);
  let url = `https://www.google.com/search?q=${safe}`;
  window.open(url, "_blank");
  input.value = "";
});
