const user = {
  role: localStorage.getItem("role") ? localStorage.getItem("role") : "member"
};
// ===============================
// ACTIVATE MEMBERSHIP
// ===============================
function becomeMember() {
  localStorage.setItem("role", "member");
  alert("Membership activated!");
  location.reload();
}

// ===============================
// LOGOUT
// ===============================
function logout() {
  localStorage.removeItem("role");
  alert("Logged out");
  location.reload();
}

// ===============================
// APPLY PACKAGE LOCK (Package Page)
// ===============================
function applyPackageLock() {

  if (user.role !== "member") {

    document.querySelectorAll('.package-card').forEach(card => {

      card.classList.add('locked');

      const btn = card.querySelector('.cart-btn');
      if (btn) {
        btn.disabled = true;
        btn.innerText = "Members";
      }

      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert("Members only. Please choose a package to unlock.");
      });

    });

  }

}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  applyPackageLock();

  const banner = document.querySelector('.membership-banner');

  // IF MEMBER → hide banner
  if (user.role === "member") {
    if (banner) {
      banner.style.display = "none";
    }
  }

});