document.addEventListener('DOMContentLoaded', function() {
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

  // Edit Profile Functionality
  const editProfileBtn = document.getElementById('editProfileBtn');
  const editModal = document.getElementById('editProfileModal');
  const closeBtn = document.querySelector('.close-modal');
  const saveProfileBtn = document.getElementById('saveProfileBtn');
  const cancelBtn = document.getElementById('cancelBtn');

  // Open Edit Profile Modal
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
      console.log('Edit Profile button clicked');
      if (editModal) {
        editModal.style.display = 'flex';
        // Populate form with current data
        const fullNameInput = document.getElementById('fullNameInput');
        const emailInput = document.getElementById('emailInput');
        const memberSinceInput = document.getElementById('memberSinceInput');
        
        const currentName = document.querySelector('.info-row:nth-child(1) p')?.textContent || '';
        const currentEmail = document.querySelector('.info-row:nth-child(2) p')?.textContent || '';
        const currentMemberSince = document.querySelector('.info-row:nth-child(3) p')?.textContent || '';
        
        if (fullNameInput) fullNameInput.value = currentName;
        if (emailInput) emailInput.value = currentEmail;
        if (memberSinceInput) memberSinceInput.value = currentMemberSince;
      }
    });
  }

  // Close Modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (editModal) {
        editModal.style.display = 'none';
      }
    });
  }

  // Cancel Button
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      if (editModal) {
        editModal.style.display = 'none';
      }
    });
  }

  // Save Profile Changes
  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      const fullNameInput = document.getElementById('fullNameInput');
      const emailInput = document.getElementById('emailInput');
      const memberSinceInput = document.getElementById('memberSinceInput');
      
      if (fullNameInput.value.trim() === '' || emailInput.value.trim() === '' || memberSinceInput.value.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
      
      // Update displayed profile info
      const nameElement = document.querySelector('.info-row:nth-child(1) p');
      const emailElement = document.querySelector('.info-row:nth-child(2) p');
      const memberSinceElement = document.querySelector('.info-row:nth-child(3) p');
      
      if (nameElement) nameElement.textContent = fullNameInput.value;
      if (emailElement) emailElement.textContent = emailInput.value;
      if (memberSinceElement) memberSinceElement.textContent = memberSinceInput.value;
      
      // Close modal
      if (editModal) {
        editModal.style.display = 'none';
      }
      
      // Show success message
      alert('Profile updated successfully!');
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === editModal) {
      if (editModal) {
        editModal.style.display = 'none';
      }
    }
  });
});