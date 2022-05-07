/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import FavoriteMakanKuyIdb from '../data/makanKuy-idb';

const likeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteMakanKuyIdb.getResto(id);
    return !!resto;
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = '<i class="large material-icons" aria-label="unlike this resto">favorite</i>';

    const likeButton = document.querySelector('.header-favorite');

    likeButton.addEventListener('click', async () => {
      await FavoriteMakanKuyIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML = '<i class="large material-icons" aria-label="like this resto">favorite_border</i>';

    const likeButton = document.querySelector('.header-favorite');

    likeButton.addEventListener('click', async () => {
      await FavoriteMakanKuyIdb.putResto(this._resto);
      this._renderButton();
    });
  },
};

export default likeButtonInitiator;
