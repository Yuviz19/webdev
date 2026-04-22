document.addEventListener("DOMContentLoaded", () => {
  const srch_form = document.getElementById("search_form");
  const urlInput = document.getElementById("urlInput");
  const search_btn = document.getElementById("search");
  const view_frame = document.getElementById("viewer");

  let state = {
    currentUrl: ""
  };

  srch_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let entry = urlInput.value;
    entry = entry.trim();
    if (entry === "") return;
    if (!entry.startsWith("http")) {
      entry = "https://" + entry;
    };
    state.currentUrl = entry;
    render();
  });

  function render() {
    view_frame.src = state.currentUrl;
  };
});
