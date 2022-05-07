/* eslint-disable linebreak-style */
import RestaurantData from '../scripts/data/restaurantData';

const Home = {
  async render() {
    return `
      <jumbo-tron></jumbo-tron>
      <div id="content">
        <div class="container">
          <h1 class="title">Booking your Restourant</h1>
        </div>
        <resto-list></resto-list>
      </div>
    `;
  },

  async afterRender() {
    const restoListElement = document.querySelector('resto-list');
    const restoList = RestaurantData.getRestaurantsList();
    restoListElement.restoList = restoList;
  },
};

export default Home;
