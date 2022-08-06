// Assets
import "normalize.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Favicon from "./assets/img/favicon.png";

// Feature
import changeFavicon from "./util/changeFavicon";
import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";

(() => {
  // * add favicon logo
  changeFavicon(Favicon);

  const element = document.createElement("div");
  element.classList.add("content");

  // * static header
  element.appendChild(Header());

  // * dynamic content
  const dynamicContent = document.createElement("div");
  dynamicContent.classList.add("dynamic-content");
  element.appendChild(dynamicContent);

  // * default content to Home page
  dynamicContent.appendChild(Home());

  // *get old child in dynamic-content
  const oldChild = dynamicContent.firstElementChild;
  // *replace dynamic content child
  dynamicContent.replaceChild(Menu(), oldChild);

  document.body.appendChild(element);
})();
