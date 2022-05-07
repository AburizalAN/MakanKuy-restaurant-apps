import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import '../components/navbar';
import '../components/jumbotron';
import '../components/resto-list';
import '../components/footer-element';

import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// const isSidenav = false;
const menuButton = document.querySelector('.menu-icon');
const sideNav = document.querySelector('.sideNavList');
menuButton.addEventListener('click', () => {
  if (sideNav.classList.contains('disable')) {
    sideNav.classList.remove('disable');
  } else {
    sideNav.classList.add('disable');
  }
});

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
