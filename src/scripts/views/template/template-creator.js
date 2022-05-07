/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
const detailPageTemplate = (resto) => {
  const {
    pictureId,
    name,
    city,
    address,
    description,
    categories,
    rating,
    menus,
    customerReviews,
  } = resto;

  let categoryMenu = '';
  categories.forEach((category) => {
    categoryMenu += `<div class="category-menu">${category.name}</div>`;
  });

  let foodsList = '';
  menus.foods.forEach((food) => {
    foodsList += `
      <div class="col md-3 flex">
        <div tabindex="0" class="menu-makanan-menu">
          ${food.name}
        </div>
      </div>
    `;
  });

  let drinksList = '';
  menus.drinks.forEach((food) => {
    drinksList += `
      <div class="col md-3 flex">
        <div tabindex="0" class="menu-makanan-menu">
          ${food.name}
        </div>
      </div>
    `;
  });

  let reviews = '';
  customerReviews.forEach((review) => {
    reviews += `
      <div class="reviews-item">
        <div class="flex">
          <div class="reviews-avatar">
            <img src="/images/profil.png" alt="profil" />
          </div>
          <div class="reviews-content">
            <h4>${review.name}</h4>
            <p>${review.review}</p>
          </div>
        </div>
      </div>
    `;
  });

  return `
    <div class="container">
      <div class="top-content">
        <div class="row">
          <div class="col md-5 flex">
            <img class="img top-content-pic" src="https://restaurant-api.dicoding.dev/images/large/${pictureId}" alt="image ${name}" />
          </div>
          <div class="col md-7">
            <div class="flex items-center justify-between header">
              <div class="header-content">
                <h1>${name}</h1>
                <h3 class="m-0">Address : ${address}, ${city}</h3>
              </div>
              <div class="flex items-center header-rating">
                <img class="star-icon" src="/images/star.png" alt="star-icon" />
                <h1 class="m-0">${rating}</h1>
              </div>
              <div class="header-divider"></div>
              <button class="header-favorite">
                <i class="large material-icons" aria-label="like this resto">favorite_border</i>
              </button>
            </div>
            <div class="category">
              <h3 class="m-0 category-title">Kategori : </h3>
              <div class="flex items-center">
                ${categoryMenu}    
              </div>
            </div>
            <h3 class="m-0">Deskripsi Restoran : </h3>
            <p>City : ${description}</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col lg-8">
          <div class="detail-resto">
            <div class="menu-makanan">
              <h3 class="m-0 menu-makanan-title">Daftar Menu Makanan : </h3>
              <div class="row">
                ${foodsList}
              </div>
            </div>
            <div class="menu-makanan">
              <h3 class="m-0 menu-makanan-title">Daftar Menu Minuman : </h3>
              <div class="row">
                ${drinksList}
              </div>
            </div>
          </div>
        </div>
        <div class="col lg-4">
          <div class="reviews">
            <h3 class="reviews-title">Reviews : </h3>
            <div class="reviews-lists">
              ${reviews}
            </div>
          <div>
        </div>
      </div>
    </div>
  `;
};

export { detailPageTemplate };
