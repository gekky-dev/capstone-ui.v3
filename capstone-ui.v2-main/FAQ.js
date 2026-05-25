// Change this to true if the user is logged in
// false = topbar version
// true = sidebar version
const isLoggedIn = false;

if (isLoggedIn) {
  document.body.classList.remove("topbar-version");
  document.body.classList.add("sidebar-version");
} else {
  document.body.classList.remove("sidebar-version");
  document.body.classList.add("topbar-version");
}

// FAQ accordion plus/minus
document.addEventListener("click", function (event) {
  const button = event.target.closest(".faq-question");

  if (!button) return;

  const faqItem = button.closest(".faq-item");
  const icon = button.querySelector("span");

  if (!faqItem || !icon) return;

  faqItem.classList.toggle("active");

  if (faqItem.classList.contains("active")) {
    icon.textContent = "-";
  } else {
    icon.textContent = "+";
  }
});

// Account dropdown in sidebar
document.addEventListener("click", function (event) {
  const accountBtn = event.target.closest("#accountBtn");
  const accountMenu = document.getElementById("accountMenu");

  if (!accountBtn || !accountMenu) return;

  accountMenu.classList.toggle("show");
});

// Sidebar toggle for smaller screens
document.addEventListener("click", function (event) {
  const toggleBtn = event.target.closest("#toggleBtn");
  const sidebar = document.querySelector(".sidebar");

  if (!toggleBtn || !sidebar) return;

  sidebar.classList.toggle("active");
});