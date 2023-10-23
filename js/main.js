const actionButton = document.querySelector(".circle-button");
const wheel = document.querySelector(".wheel-circle");
const modal = document.querySelector(".modal");
const firstStatus = document.querySelector(".first-status");
const secondStatus = document.querySelector(".second-status");

function setModalVisible() {
  setTimeout(() => {
    modal.classList.toggle("modal-visible");
  }, 1000);
}

let rotating = false;
let roll = 0;

actionButton.addEventListener("click", () => {
  if (roll === 0) {
    wheel.classList.add("rotate");
    wheel.classList.add("wheel-tr");
    actionButton.classList.add("disabled");
    setTimeout(() => {
      wheel.classList.remove("wheel-tr");
      roll = 1;
      actionButton.classList.remove("disabled");
      firstStatus.innerHTML = "<span>150</span> ФРИСПИНОВ";
    }, 5000);
  }
  if (roll === 1) {
    wheel.classList.add("wheel-tr");
    wheel.classList.add("second-rotate");
    actionButton.classList.add("disabled");
    setTimeout(() => {
      wheel.classList.add("wheel-tr");
      setModalVisible();
      roll = 2;
      actionButton.classList.remove("disabled");
      secondStatus.innerHTML = "<span>137,000₽</span> бонус";
    }, 5000);
  }
});
