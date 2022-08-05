import "../assets/css/style.css";
import Logo from "../assets/img/logo.svg";

export default function header() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
  <div class="header__logo">
    <img src="${Logo}" alt="restaurant logo"/>
  </div>
  <ul class="header__nav">
    <li class="nav__item active">Home</li>
    <li class="nav__item">Menu</li>
    <li class="nav__item">Contact Us</li>
  </ul>
  `;

  return header;
}
