// Assets
import "normalize.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Favicon from "./assets/img/favicon.png";
import Header from "./components/header";

// Feature
import changeFavicon from "./changeFavicon";

(() => {
  // * add favicon logo
  changeFavicon(Favicon);

  const element = document.createElement("div");
  element.classList.add("content");
  element.setAttribute("id", "content");
  element.appendChild(Header());
  document.body.appendChild(element);
})();
