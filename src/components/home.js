import "../assets/css/style.css";
import { events } from "../util/events";

export default function home() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.innerHTML = `
  <div class="hero-container">
    <h1 class="hero__title">Exquisite dining <br/>since 1989</h1>
    <p class="hero__text">
      Experience our seasonal menu in beautiful country surroundings.<br/>
      Eat the freshest produce from the comfort of our farmhouse.
    </p>
    <div class="hero__action">
      <button type="button" class="btn" data-tab="menu">Order Now</button>
    </div>
  </div>
  `;

  const button = home.querySelector(".btn");
  button.addEventListener("click", (evt) => {
    console.log("cli");
    events.emit("changeTab", evt.target);
  });
  return home;
}
