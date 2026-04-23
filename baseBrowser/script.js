document.addEventListener("DOMContentLoaded", () => {
  const srch_form = document.getElementById("search_form");
  const urlInput = document.getElementById("urlInput");
  const view_frame = document.getElementById("viewer");
  const backward = document.getElementById("back");
  const forward = document.getElementById("forward");
  const addTab = document.getElementById("add_tab");
  const tab_container = document.getElementById("tabs_container");

  let state = {
    tab: [
      {
        id: 1,
        backStack: [],
        currentUrl: "",
        forwardStack: [],
      }
    ],
    activeTabId: 1
  };

  // add an intial tab
  function InitFirstTab() {
    newTab = document.createElement("button");
    newTab.id = state.tab[0].id;
    newTab.textContent = "Tab 1";

    tab_container.appendChild(newTab);
  };

  InitFirstTab();

  // logic for tab addition and in-tab navigation
  addTab.addEventListener("click", () => {
      newTab = document.createElement("button");

      // get the id of the last tab
      lastTabId = state.tab.length;

      newTab.id = lastTabId + 1;
      newTab.textContent = `Tab ${lastTabId + 1}`;

      tab_container.appendChild(newTab);

      state.tab.push({id: newTab.id, backStack: [], currentUrl: "", forwardStack: []})
      state.activeTabId = newTab.id;
    });

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
