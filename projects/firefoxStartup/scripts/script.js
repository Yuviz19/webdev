const form = document.getElementById("searchform");
const input = document.getElementById("searchinput");
const linksul = document.getElementById("links");
const linkbutt = document.getElementById("newLinkbutt");
const delbutt = document.getElementById("delLinkbutt");
const left = document.getElementById("left");
const right = document.getElementById("right");
let deleteMode = false;

updateDay();
setInterval(updateDay, 60000);

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

    // delete state - "X" button, div tags instead of a tags
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

  const safe = encodeURIComponent(entry); // direct searching doesn't work
  let url = `https://www.google.com/search?q=${safe}`;
  window.open(url, "_blank");
  input.value = "";
});

function updateDay() {
  const time = new Date();
  const formated = time.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  right.textContent = formated;
}

function capitalize(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function updateWeather() {
  try {
    let res = await fetch("https://wttr.in/?format=j1");

    if (!res.ok) {
      left.textContent = "Weather Not Available!";
      return;
    }

    const data = await res.json();

    let curr_temp = data.current_condition[0].FeelsLikeC;
    let feelsLike = data.current_condition[0].weatherDesc[0].value;
    let feel = capitalize(feelsLike);

    console.log(curr_temp)
    console.log(feel)
    left.textContent = `${curr_temp}°C | ${feel}`;

  } catch {
    left.textContent = "Weather Error";
  }
}

updateWeather()
setInterval(updateWeather, 3600000);
