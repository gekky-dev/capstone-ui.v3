document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector("#toggleBtn");

  if (!sidebar || !toggleBtn) return;

  if (localStorage.getItem("sidebarCollapsed") === "true") {
    sidebar.classList.add("collapsed");
  }

  toggleBtn.addEventListener("click", () => {
    const isCollapsed = sidebar.classList.toggle("collapsed");

    document.documentElement.classList.toggle("sidebar-collapsed", isCollapsed);
    localStorage.setItem("sidebarCollapsed", isCollapsed);
  });
});
