import "../assets/css/style.css";
import Locate from "../assets/img/location.png";
import OpenHours from "../assets/img/clock.png";
import Phone from "../assets/img/phone.png";

export default function contact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.innerHTML = `
  <div class="contact__title">Contact</div>
  <div class="contact__wrapper">
    <div class="contact__info">
      <div class="info__address">
        <div class="info__icon">
          <img src="${Locate}" alt="location" />
        </div>
        MARTHWAITE, SEDBERGH CUMBRIA
      </div>
      <div class="info__hours">
        <div class="info__icon">
          <img src="${OpenHours}" alt="open hours" />
        </div>
        MON - FRI: 09:00 AM - 10:00 PM <br />
        SAT - SUN: 09:00 AM - 11:30 PM
      </div>
      <div class="info__phone">
        <div class="info__icon">
          <img src="${Phone}" alt="phone number" />
        </div>
        00 44 123 4567
      </div>
    </div>
    <div class="contact__map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.742606572856!2d-0.15892598391953744!3d51.49959071909463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053becc66605%3A0xafa0a89dc29a8152!2sP%C3%A9trus%20by%20Gordon%20Ramsay!5e0!3m2!1sen!2s!4v1659862629469!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
  `;

  return contact;
}
