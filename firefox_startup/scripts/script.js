const form = document.getElementById("searchform");
const input = document.getElementById("searchinput");
const linksul = document.getElementById("links");
const linkbutt = document.getElementById("newLinkbutt");
const delbutt = document.getElementById("delLinkbutt");
let deleteMode = false;

let links = JSON.parse(localStorage.getItem("fire_linx")) || [];

function saveLinks() {
  localStorage.setItem("fire_linx", JSON.stringify(links));
};

linkbutt.addEventListener("click", function (e) {
  let site_name = prompt("Name of Website");
  let site_url = prompt("URL of Website");
  let newLink = {};

  if (site_name !== null && site_url !== null) {
    site_url = site_url.trim();
    site_name = site_name.trim();
    if (site_name !== "" && site_url !== "" && site_url.startsWith("http")) {
      newLink.name = site_name;
      newLink.url = site_url;
      links.push(newLink);
      saveLinks();
      renderList();
    }
  }
});

delbutt.addEventListener("click", function () {
  deleteMode = !deleteMode;
  renderList()
});

function renderList() {
  linksul.innerHTML = "";
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const li = document.createElement("li");

    if (deleteMode) {
      const div = document.createElement("div");
      const button = document.createElement("button");

      button.textContent = "X";

      button.addEventListener("click", function () {
        links.splice(i, 1);
        saveLinks();
        deleteMode = false;
        renderList();
      });

      div.textContent = link.name;
      div.appendChild(button);
      li.appendChild(div);
    } else {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank";
        li.appendChild(a);
      }
    linksul.appendChild(li);
  }
}

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
