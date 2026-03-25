const form = document.getElementById("searchform");
const input = document.getElementById("searchinput");

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
