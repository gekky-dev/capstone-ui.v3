const cartItemsContainer = document.getElementById("cartItemsContainer");
const emptyCartState = document.getElementById("emptyCartState");
const cartTotal = document.getElementById("cartTotal");
const summarySubtotal = document.getElementById("summarySubtotal");
const summaryTotal = document.getElementById("summaryTotal");
const selectAll = document.getElementById("selectAll");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const detailsSection = document.getElementById("detailsSection");
const cartTableHeader = document.getElementById("cartTableHeader");
const cartFooter = document.getElementById("cartFooter");

let items = [];

function formatPeso(value) {
  return "₱" + Number(value).toLocaleString();
}

function getSelectedItems() {
  return items.filter((item) => item.checked);
}

function getSelectedTotal() {
  return getSelectedItems().reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function renderCart() {
  cartItemsContainer.innerHTML = "";

if (items.length === 0) {
  emptyCartState.style.display = "block";
  cartTableHeader.style.display = "grid";
  cartFooter.style.display = "flex";
  selectAll.disabled = true;
  selectAll.checked = false;
  placeOrderBtn.disabled = true;
  cartTotal.textContent = "₱0";
  summarySubtotal.textContent = "₱0";
  summaryTotal.textContent = "₱0";
  detailsSection.classList.remove("show");
  return;
}


  emptyCartState.style.display = "block";
  emptyCartState.style.display = "none";
  cartTableHeader.style.display = "grid";
  cartFooter.style.display = "flex";
  selectAll.disabled = false;

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-row";

    row.innerHTML = `
      <div class="col-product">
        <div class="product-cell">
          <input type="checkbox" class="product-check" ${item.checked ? "checked" : ""} data-id="${item.id}">
          <span class="product-name">${item.name}</span>
        </div>
      </div>

      <div class="col-price">
        <span class="price-text">${formatPeso(item.price)}</span>
      </div>

      <div class="col-qty">
        <div class="qty-box">
          <button class="qty-btn minus-btn" data-id="${item.id}">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn plus-btn" data-id="${item.id}">+</button>
        </div>
      </div>

      <div class="col-subtotal">
        <span class="subtotal-text">${formatPeso(item.price * item.quantity)}</span>
      </div>
    `;

    cartItemsContainer.appendChild(row);
  });

  attachCartEvents();
  updateSummary();
}

function updateSummary() {
  const selectedItems = getSelectedItems();
  const total = getSelectedTotal();

  cartTotal.textContent = formatPeso(total);
  summarySubtotal.textContent = formatPeso(total);
  summaryTotal.textContent = formatPeso(total);

  placeOrderBtn.disabled = selectedItems.length === 0;

  if (items.length > 0) {
    selectAll.checked = items.every((item) => item.checked);
  }
}

function attachCartEvents() {
  document.querySelectorAll(".product-check").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const id = Number(event.target.dataset.id);
      const item = items.find((entry) => entry.id === id);
      if (!item) return;
      item.checked = event.target.checked;
      updateSummary();
    });
  });

  document.querySelectorAll(".minus-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number(event.target.dataset.id);
      const item = items.find((entry) => entry.id === id);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
        renderCart();
      }
    });
  });

  document.querySelectorAll(".plus-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number(event.target.dataset.id);
      const item = items.find((entry) => entry.id === id);
      if (!item) return;
      item.quantity += 1;
      renderCart();
    });
  });
}

selectAll.addEventListener("change", () => {
  items = items.map((item) => ({
    ...item,
    checked: selectAll.checked
  }));
  renderCart();
});

placeOrderBtn.addEventListener("click", () => {
  if (getSelectedItems().length === 0) return;
  detailsSection.classList.add("show");
  detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderCart();
