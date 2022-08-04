// Assets
import "normalize.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Favicon from "./assets/img/favicon.png";

// Feature
import changeFavicon from "./changeFavicon";

(() => {
  // * add favicon logo
  changeFavicon(Favicon);

  const element = document.createElement("div");
  element.classList.add("content");
  element.setAttribute("id", "content");
  document.body.appendChild(element);
})();
