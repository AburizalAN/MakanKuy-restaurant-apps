/* eslint-disable linebreak-style */
import UrlParser from '../scripts/routes/url-parser';
import RestaurantData from '../scripts/data/restaurantData';
import { detailPageTemplate } from '../scripts/views/template/template-creator';
import LikeButtonInitiator from '../scripts/utils/likeButton-initiator';

const DetailPage = {
  async render() {
    return `
      <div id=detail-page></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantData.getDetail(url.id);
    // console.log(resto);

    const detailElement = document.querySelector('#detail-page');
    detailElement.innerHTML = detailPageTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.header-favorite'),
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        city: resto.city,
        address: resto.address,
        description: resto.description,
        categories: resto.categories,
        rating: resto.rating,
        menus: resto.menus,
        customerReviews: resto.customerReviews,
      },
    });
  },
};

export default DetailPage;
