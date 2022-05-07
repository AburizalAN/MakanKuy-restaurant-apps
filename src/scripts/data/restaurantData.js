/* eslint-disable linebreak-style */
const url = 'https://restaurant-api.dicoding.dev';

class RestaurantData {
  static async getRestaurantsList() {
    const response = await fetch(`${url}/list`);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(`${url}/detail/${id}`);
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default RestaurantData;
