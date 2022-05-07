/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('There are no Restourant', '.title');
});

Scenario('test something', ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.link-wrapper');
  I.click(locate('.link-wrapper').first());

  I.seeElement('.header-favorite');
  I.click(locate('.header-favorite'));

  I.amOnPage('/#/favorite');
  I.seeElement('.link-wrapper');
  I.click(locate('.link-wrapper').first());

  I.seeElement('.header-favorite');
  I.click(locate('.header-favorite'));

  I.amOnPage('/#/favorite');
  I.see('There are no Restourant', '.title');
});
