/* eslint-disable linebreak-style */
import FavoriteMakanKuyIdb from '../scripts/data/makanKuy-idb';

const Favorite = {
  async render() {
    return `
      <div id="content">
        <div class="container">
          <h1 class="title">Your Favorite Restourant</h1>
        </div>
        <resto-list></resto-list>
      </div>
    `;
  },

  async afterRender() {
    const restoList = await FavoriteMakanKuyIdb.getAllResto();

    const restoListElement = document.querySelector('resto-list');
    restoListElement.restoList = restoList;
  },
};

export default Favorite;
