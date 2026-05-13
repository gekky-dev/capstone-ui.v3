document.addEventListener("DOMContentLoaded", () => {

  const packageCards = document.querySelectorAll(".package-card");

  packageCards.forEach(card => {

    const radio = card.querySelector("input[type='radio']");

    if (radio) {

      radio.addEventListener("change", () => {

        packageCards.forEach(c => {
          c.classList.remove("active");
        });

        card.classList.add("active");

      });

    }

  });

});