const container = document.querySelector(".card-container");
const cards = document.querySelector(".cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards(-200);
});

container.addEventListener("touchstart", (e) => {
  isPressedDown = true;
  cursorXSpace = e.touches[0].clientX - cards.offsetLeft;
});

window.addEventListener("touchend", () => {
  isPressedDown = false;
});

container.addEventListener("touchmove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.touches[0].clientX - cursorXSpace}px`;
  boundCards(-50);
});

function boundCards(Axis) {


  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (parseInt(cards.style.left) < Axis) {
    cards.style.left = `${Axis}px`;
  }
}
