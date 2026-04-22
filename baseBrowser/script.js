document.addEventListener("DOMContentLoaded", () => {
  const srch_form = document.getElementById("search_form");
  const urlInput = document.getElementById("urlInput");
  const view_frame = document.getElementById("viewer");
  const backward = document.getElementById("back");
  const forward = document.getElementById("forward");

  let state = {
    backStack: [],
    currentUrl: "",
    forwardStack: []
  };

  backward.addEventListener("click",() => {
    if (state.backStack.length === 0) {
      return;
    };

    if (state.currentUrl !== "") {
      state.forwardStack.push(state.currentUrl);
    };
    state.currentUrl = state.backStack.pop();
    render();
  });

  forward.addEventListener("click", () => {
    if (state.forwardStack.length === 0) {
      return;
    };

    if (state.currentUrl !== "") {
      state.backStack.push(state.currentUrl);
    };
    state.currentUrl = state.forwardStack.pop();
    render();
  });

  srch_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let entry = urlInput.value;
    entry = entry.trim();

    if (entry === "") return;
    if (!entry.startsWith("http")) {
      entry = "https://" + entry;
    };

    if (state.currentUrl != "" && state.currentUrl !== entry) {
      state.backStack.push(state.currentUrl);
      state.forwardStack = [];
    };

    state.currentUrl = entry;

    render();
  });

  function render() {
    view_frame.src = state.currentUrl;
    urlInput.value = state.currentUrl;
    backward.disabled = state.backStack.length === 0;
    forward.disabled = state.forwardStack.length === 0;
  };
});
