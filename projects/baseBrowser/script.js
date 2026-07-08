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
    newTab.dataset.id = state.tab[0].id;
    newTab.textContent = "Tab 1";

    tab_container.appendChild(newTab);
  };

  InitFirstTab();
  render();

  // logic for tab addition and in-tab navigation
  addTab.addEventListener("click", () => {
    const newTab = document.createElement("button");
    // get the id of the last tab
    const lastTabId = state.tab.length;
    const newid = lastTabId + 1;
    newTab.dataset.id = newid;
    newTab.textContent = `Tab ${lastTabId + 1}`;

    tab_container.appendChild(newTab);

    state.tab.push({id: newid, backStack: [], currentUrl: "", forwardStack: []})
    state.activeTabId = newid;

    render()
  });

  tab_container.addEventListener("click", (e) => {
    const target = e.target.closest("button");

    if (!target || !target.dataset.id) return;

    const id = Number(target.dataset.id);
    state.activeTabId = id;
    render();
  });

  function getActiveTab() {
    return state.tab.find(tab => tab.id === state.activeTabId);
  };

  backward.addEventListener("click", () => {
    let curr_tab = getActiveTab()

    if (curr_tab.backStack.length === 0) {
      return;
    };

    if (curr_tab.currentUrl !== "") {
      curr_tab.forwardStack.push(curr_tab.currentUrl);
    };
    curr_tab.currentUrl = curr_tab.backStack.pop();
    render();
  });

  forward.addEventListener("click", () => {
    let curr_tab = getActiveTab();

    if (curr_tab.forwardStack.length === 0) {
      return;
    };

    if (curr_tab.currentUrl !== "") {
      curr_tab.backStack.push(curr_tab.currentUrl);
    };
    curr_tab.currentUrl = curr_tab.forwardStack.pop();
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

    let curr_tab = getActiveTab();

    if (curr_tab.currentUrl != "" && curr_tab.currentUrl !== entry) {
      curr_tab.backStack.push(curr_tab.currentUrl);
      curr_tab.forwardStack = [];
    };

    curr_tab.currentUrl = entry;

    render();
  });

  function render() {
    let curr_tab = getActiveTab();
    view_frame.src = curr_tab.currentUrl;
    urlInput.value = curr_tab.currentUrl;
    backward.disabled = curr_tab.backStack.length === 0;
    forward.disabled = curr_tab.forwardStack.length === 0;
  };
});
