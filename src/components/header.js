import "../assets/css/style.css";
import Logo from "../assets/img/logo.svg";

import { events } from "../util/events";
import setActive from "../util/setActive";

export default function header() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
  <div class="header__logo">
    <img src="${Logo}" alt="restaurant logo"/>
  </div>
  <ul class="header__nav">
    <li class="nav__item active" data-tab="home">Home</li>
    <li class="nav__item" data-tab="menu">Menu</li>
    <li class="nav__item" data-tab="contact">Contact Us</li>
  </ul>
  `;

  //* on to changeTab events to change nav__item status
  events.on("changeTab", setActive);

  const navList = Array.from(header.querySelectorAll(".nav__item"));
  navList.forEach((item) => {
    item.addEventListener("click", (evt) => {
      //* emit change tab event
      events.emit("changeTab", evt.target);
    });
  });

  return header;
}
