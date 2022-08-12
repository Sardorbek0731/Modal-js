const clickModal = document.querySelector("#modal");
const modal_head_h1 = document.querySelector("#modal_head_h1");
const clickBtn = document.querySelector("button");
const overlay = document.getElementById("main_overlay");
const closeModal = document.querySelector("i");

let ism = prompt("Ismingizni kiriting: ");
let uppercase = ism.charAt().toUpperCase();
let lowercase = ism.slice(1).toLowerCase();
let newIsm = uppercase + lowercase;

modal_head_h1.innerHTML = `Assalomu alaykum, ${newIsm}`;

clickBtn.addEventListener("click", () => {
  clickModal.classList.remove('hidden');
  overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  clickModal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener('click', () => {
    clickModal.classList.add("hidden");
    overlay.classList.add("hidden");
})
document.addEventListener('keydown', () => {
    clickModal.classList.add("hidden");
    overlay.classList.add("hidden");
})
