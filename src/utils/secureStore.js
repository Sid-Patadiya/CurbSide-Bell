import * as SecureStore from 'expo-secure-store';
import api from './api';

const secureStore = {

  async saveCustomerToken(data) {
    if (!data?.customerToken) return;
    api.defaults.headers.common['customerToken'] = data.customerToken;
    await SecureStore.setItemAsync('customerToken', data.customerToken);
  },

  async deleteCustomerToken() {
    delete api.defaults.headers.common['customerToken'];
    await SecureStore.deleteItemAsync('customerToken');
  },

  async getCustomerToken() {
    const customerToken = await SecureStore.getItemAsync('customerToken');
    api.defaults.headers.common['customerToken'] = customerToken;
    return customerToken;
  },

  async getCartToken() {
    const cartToken = await SecureStore.getItemAsync('cartToken');
    return cartToken;
  },

  async setUserData(data) {
    if (data) {
      await SecureStore.setItemAsync("userData", JSON.stringify(data));
    }
  },
  async deleteUserData(data) {
    if (data) {
      await SecureStore.deleteItemAsync("userData");
    }
  },

  async getUserData() {
    const userData = await SecureStore.getItemAsync('userData');
    return userData;
  },

  async setCartToken(cartToken) {
    if (cartToken) {
      await SecureStore.setItemAsync("cartToken", cartToken);
    }
  },
}

export default secureStore;