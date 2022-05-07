/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/likeButton-initiator';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('.header-favorite'),
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
