import "../assets/css/style.css";
import Chef from "../assets/img/chef.png";
import Hamburger from "../assets/img/hamburger.png";
import CheeseBurger from "../assets/img/cheeseburger.png";
import DoubleCheese from "../assets/img/double-cheeseburger.png";
import Steak from "../assets/img/steak.png";
import Ribs from "../assets/img/ribs.png";
import GrilledCheese from "../assets/img/grilled-cheese.png";
import Salad from "../assets/img/caesar-salad.png";
import FrenchFried from "../assets/img/french-fries.png";

export default function menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = `
    <div class="menu__title">
      Menu
      <img src="${Chef}" alt="chef img"/>
    </div>
    <div class="menu__wrapper">
      <div class="menu__item">
        <div class="menu__img">
          <img src="${Hamburger}" alt="hamburger img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">Hamburger : <span>$2.49</span></h3>
          <p class="menu__description">
            Buns, patty, tomato, onions, lettuce, and our secret family recipe.
          </p>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__img">
          <img src="${CheeseBurger}" alt="cheese burger img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">Cheese Burger : <span>$2.99</span></h3>
          <p class="menu__description">
            Similar to our hamburger, but with cheese.
          </p>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__img">
          <img src="${DoubleCheese}" alt="double-cheese burger img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">Double Cheese Burger : <span>$2.49</span></h3>
          <p class="menu__description">
            Similar to our cheeseburger, but with an extra patty.
          </p>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__img">
          <img src="${Steak}" alt="steak img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">Steak : <span>$11.99</span></h3>
          <p class="menu__description">
            A juicy steak made just how you like it.
          </p>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__img">
          <img src="${Ribs}" alt="ribs img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">BBQ Ribs : <span>$8.99</span></h3>
          <p class="menu__description">
            Barbecue ribs with your choice of a add-ons.
          </p>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__img">
          <img src="${GrilledCheese}" alt="grilled cheese sandwich img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">Grilled Cheese Sandwich : <span>4.49</span></h3>
          <p class="menu__description">
            A toasted and grilled cheese sandwich, dipped in our special sauce.
          </p>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__img">
          <img src="${Salad}" alt="Salad img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">Caesar Salad : <span>$7.49</span></h3>
          <p class="menu__description">
            Your typical caesar salad that comes with your choice of dressings.
          </p>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__img">
          <img src="${FrenchFried}" alt="french fries img"/>
        </div>
        <div class="menu__text">
          <h3 class="menu__dish">French Fries : <span>$1.99</span></h3>
          <p class="menu__description">
            Sometimes you don't want to eat your burger alone, why not add some french fries?
          </p>
        </div>
      </div>
    </div>
  `;

  return menu;
}
