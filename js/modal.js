const heroBtn = document.querySelector(".hero-button");
const modalCloseBtn = document.querySelector(".close-button");
const modalBackdrop = document.querySelector(".backdrop");
const mobileMenuBtn = document.querySelector(".header-mobile-menu-button");
const mobileMenuCloaseBtn = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

const openModal = () => {
  modalBackdrop.classList.toggle("hidden");

  modalCloseBtn.addEventListener("click", handleModalCloseBtnClick);
  modalBackdrop.addEventListener("click", hanldeModalBackdropClick);
  document.addEventListener("keydown", handleKeydown);
};
const closeModal = () => {
  modalBackdrop.classList.toggle("hidden");

  modalCloseBtn.removeEventListener("click", handleModalCloseBtnClick);
  modalBackdrop.removeEventListener("click", hanldeModalBackdropClick);
  document.removeEventListener("keydown", handleKeydown);
};
const openMenu = () => {
  mobileMenu.classList.toggle("hidden");

  mobileMenuCloaseBtn.addEventListener("click", handleMobileMenuCloseBtnClick);
};
const closeMenu = () => {
  mobileMenu.classList.toggle("hidden");

  modalCloseBtn.removeEventListener("click", handleMobileMenuCloseBtnClick);
};

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

const handleMobileMenuCloseBtnClick = () => {
  closeMenu();
};

const handleMobileMenuBtnClick = () => {
  openMenu();
};

const hanldeModalBackdropClick = (event) => {
  if (event.target.classList.contains("backdrop")) {
    closeModal();
  }
};

const handleHeroBtnClick = () => {
  openModal();
};

const handleModalCloseBtnClick = () => {
  closeModal();
};

heroBtn.addEventListener("click", handleHeroBtnClick);
mobileMenuBtn.addEventListener("click", handleMobileMenuBtnClick);
