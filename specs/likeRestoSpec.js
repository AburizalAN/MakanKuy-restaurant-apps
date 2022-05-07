/* eslint-disable no-undef */
import FavoriteMakanKuyIdb from '../src/scripts/data/makanKuy-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking a Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="header-favorite"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('.header-favorite').dispatchEvent(new Event('click'));
    const resto = await FavoriteMakanKuyIdb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteMakanKuyIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteMakanKuyIdb.putResto({ id: 1 });
    document.querySelector('.header-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteMakanKuyIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteMakanKuyIdb.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('.header-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteMakanKuyIdb.getAllResto()).toEqual([]);
  });
});
