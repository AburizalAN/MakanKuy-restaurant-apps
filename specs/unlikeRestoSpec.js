/* eslint-disable no-undef */
import FavoriteMakanKuyIdb from '../src/scripts/data/makanKuy-idb';
import * as TestFactories from './helpers/testFactories';

describe('unliking the resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="header-favorite"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteMakanKuyIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteMakanKuyIdb.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked Resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('.header-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteMakanKuyIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteMakanKuyIdb.deleteResto(1);

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteMakanKuyIdb.getAllResto()).toEqual([]);
  });
});
