/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class Resto extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    const {
      pictureId, name, rating, description, city,
    } = this._resto;
    this.innerHTML = `
      <div class="img-wrapper">
        <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${pictureId}" alt="restourant-image"/>
      </div>
      <div class="body-wrapper">
        <div class="flex justify-between items-center title-wrapper">
          <div>
            <h1>${name}</h1>
            <h4>${city}</h4>
          </div>
          <div class="flex items-center">
            <img class="star-icon" src="/images/star.png" alt="star-icon" />
            <h2>${rating}</h2>
          </div>
        </div>
        <p>
          ${description.slice(0, 100)}...
        </p>
      </div>
    `;
  }
}

customElements.define('resto-item', Resto);
