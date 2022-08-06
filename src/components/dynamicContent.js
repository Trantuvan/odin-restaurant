import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";
import { events } from "../util/events";

export default function dynamicContent() {
  const dynamicContent = document.createElement("div");
  dynamicContent.classList.add("dynamic-content");
  //* default content to Home page
  dynamicContent.appendChild(Home());

  //* on to ChangeTab event to change page content
  events.on("changeTab", setPageContent);

  function setPageContent(element) {
    const navItemTxt = element.getAttribute("data-tab");
    const oldNode = dynamicContent.firstElementChild;

    switch (navItemTxt) {
      case "home":
        dynamicContent.replaceChild(Home(), oldNode);
        break;

      case "menu":
        dynamicContent.replaceChild(Menu(), oldNode);
        break;

      case "contact":
        dynamicContent.replaceChild(Contact(), oldNode);
        break;

      default:
        break;
    }
  }

  return dynamicContent;
}
