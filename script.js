const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".icon-close");

// Buat munculin pop up (halaman utama)
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

// Buat nutup Pop up (Klik Tanda X)
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// Biar Pindah Ke REGISTER
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

// PINDAH KE LOGIN
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
