import "../assets/css/style.css";

export default function Home() {
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
      <button type="button" class="btn">Book A Table</button>
    </div>
  </div>
  `;

  return home;
}
