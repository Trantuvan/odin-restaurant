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
    <li class="nav__item">
        <a class="nav__link" href="#">Home</a>
    </li>
    <li class="nav__item">
        <a class="nav__link" href="#">Menu</a>
    </li>
    <li class="nav__item">
        <a class="nav__link" href="#">Contact Us</a>
    </li>
  </ul>
  `;

  return header;
}
