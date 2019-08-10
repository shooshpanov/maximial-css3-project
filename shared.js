const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const btn_no = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const burgerMenu = document.querySelector(".mobile-nav");

for (let i = 0; selectPlanButtons.length > i; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", () => {
  //burgerMenu.style.display = "none";
  burgerMenu.classList.remove("open");
  closeModal();
});

btn_no.addEventListener("click", closeModal);

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  modal.classList.remove("open");
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
  // burgerMenu.style.display = "block";
  // backdrop.style.display = "block";
  burgerMenu.classList.add("open");
  backdrop.classList.add("open");
});
