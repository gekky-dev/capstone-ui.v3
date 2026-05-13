document.querySelectorAll('.track-tabs .tab').forEach(tab => {
  tab.addEventListener('click', function() {
    const tabName = this.getAttribute('data-tab');
    
    // Remove active class from all tabs
    document.querySelectorAll('.track-tabs .tab').forEach(t => {
      t.classList.remove('active');
    });
    
    // Remove active class from all panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });
    
    // Add active class to clicked tab
    this.classList.add('active');
    
    // Add active class to corresponding pane
    document.getElementById(tabName).classList.add('active');
  });
});

// Account dropdown
const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");

if (accountBtn && accountMenu) {
  accountBtn.addEventListener("click", () => {
    if (accountMenu.style.display === "flex") {
      accountMenu.style.display = "none";
    } else {
      accountMenu.style.display = "flex";
    }
  });
}

