  document.documentElement.classList.add("sidebar-preload");

  if (localStorage.getItem("sidebarCollapsed") === "true") {
    document.documentElement.classList.add("sidebar-collapsed");
  }