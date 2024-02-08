import axios from "axios";
import { BASE_URI, OMNI_SITE_TOKEN } from "../../appConfig";
import Qs from "qs";

const api = axios.create({
  baseURL: BASE_URI,
  headers: {
    token: OMNI_SITE_TOKEN,
  },
  paramsSerializer: {
    encode: function (params) {
      return Qs.stringify(params, { arrayFormat: 'brackets' });
    }
  },
});
export default api;
