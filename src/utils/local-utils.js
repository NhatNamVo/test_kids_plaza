import Cookies from "js-cookie";
import { LOCAL_STORAGE_KEYS } from "constants/app-constants";

const cookieUtils = {
  set: (key, value, options = { expires: 1 }) => {
    Cookies.set(key, value, { ...options });
  },

  get: (key) => {
    try {
      return Cookies.get(key);

    } catch (error) {
      return null;
    }
  },

  remove: (key) => {
    Cookies.remove(key);
  },

  clearAll: () => {
    Object.values(LOCAL_STORAGE_KEYS).forEach((key) => this.remove(key));
  },
};

export default cookieUtils;
