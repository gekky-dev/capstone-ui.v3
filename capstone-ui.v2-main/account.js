const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");

const currentPage = window.location.pathname.split("/").pop();

accountBtn.addEventListener("click", () => {
  accountMenu.classList.toggle("show");
});

// Active state for main sidebar links
document.querySelectorAll(".menu a").forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.closest("li").classList.add("active");
  }
});

// Active state for account dropdown links
document.querySelectorAll(".account-dropdown a").forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
    accountMenu.classList.add("show");
  }
});
