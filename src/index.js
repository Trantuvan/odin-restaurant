// Assets
import "normalize.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Favicon from "./assets/img/favicon.png";

// Feature
import changeFavicon from "./util/changeFavicon";
import Header from "./components/header";
import DynamicContent from "./components/dynamicContent";

(() => {
  // * add favicon logo
  changeFavicon(Favicon);

  const element = document.createElement("div");
  element.classList.add("content");

  // * static header
  element.appendChild(Header());

  // * dynamic content
  element.appendChild(DynamicContent());

  document.body.appendChild(element);
})();
