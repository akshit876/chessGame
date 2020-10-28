import "./styles.css";

/**
 * on play click pawn should start moving after each second
 * Stop will freeze the movement of the pawn
 *
 * On cell click pawn should move to respective cell
 *
 */
let timer = 0;
const pawn_attacher = () => {
  let a1 = document.querySelector(".pawn");
  if (a1 === null) return;
  console.log(a1);
  a1.setAttribute("class", "cell");
  if (a1.nextElementSibling === null) {
    console.log("game over");
    return;
  }
  a1.nextElementSibling.setAttribute("class", "cell pawn");
};

const playbtn = document.querySelector("#play");
const stopbtn = document.querySelector("#stop");

playbtn.addEventListener("click", function () {
  timer = setInterval(pawn_attacher, 340);
});

stopbtn.addEventListener("click", function () {});
