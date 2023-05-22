const modalMain = document.querySelector("#modal_main");
const modalSuccess = document.querySelector("#modal_success");
const showSuccess = document.querySelector(".show-success");
const closed = Array.from(document.querySelectorAll(".modal__close"));

modalMain.classList.add('modal_active');

showSuccess.onclick = () => {
  modalSuccess.className = "modal modal_active";
  modalMain.className = "modal";
};
closed.forEach(function (btn) {
  const parent = btn.closest(".modal");
  btn.onclick = function () {
    parent.className = "modal";
  };
});
