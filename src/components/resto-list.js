/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import './resto';

class RestoList extends HTMLElement {
  set restoList(list) {
    this._restoList = list;
    this.render();
  }

  async render() {
    this.innerHTML = `
      <section class="resto-list">
        <div class="container">
          <div class="grid"></div>
        </div>
      </section>
    `;

    const dataRestoList = await this._restoList;

    if (dataRestoList.length === 0) {
      document.querySelector('.title').innerHTML = 'There are no Restourant';
    }

    dataRestoList.forEach((resto) => {
      const link = document.createElement('a');
      link.className = 'link-wrapper';
      link.setAttribute('href', `#/detail-page/${resto.id}`);
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.className = 'grid-item';
      restoItemElement.resto = resto;
      link.appendChild(restoItemElement);
      this.querySelector('.grid').appendChild(link);
    });
  }
}

customElements.define('resto-list', RestoList);
