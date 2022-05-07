/* eslint-disable linebreak-style */
import Home from '../../pages/Home';
import DetailPage from '../../pages/DetailPage';
import Favorite from '../../pages/Favorite';

const routes = {
  '/': Home,
  '/detail-page/:id': DetailPage,
  '/favorite': Favorite,
};

export default routes;
