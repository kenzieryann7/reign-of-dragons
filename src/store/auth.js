import jwt_decode from "jwt-decode";
import { ROLE } from "@/helpers/const.js";

const auth = {
  state: {
    token: ""
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    }
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getDecodedToken(state, getters) {
      let token = getters.getToken;

      if (token) {
        token = jwt_decode(token);
      }

      return token;
    },
    getRole(state, getters) {
      let token = getters.getDecodedToken;
      return token.role || "";
    },
    getFullname(state, getters) {
      let token = getters.getDecodedToken;
      return token.fullname || "";
    },
    getExpirationTime(state, getters) {
      let token = getters.getDecodedToken;
      return token.exp || 0;
    },
    getExpirationTimeRemaining(state, getters) {
      let currentTime = Math.round(new Date().getTime() / 1000);

      return getters.getExpirationTime - currentTime;
    },

    /*
     * Does the user have a valid token?
     */
    isAuthenticated(state, getters) {
      let token = getters.getDecodedToken;

      if (!token) {
        return false;
      }

      if (getters.getExpirationTimeRemaining < 0) {
        return false;
      }

      return true;
    },
    isAdmin(state, getters) {
      let token = getters.getDecodedToken;

      if (!getters.isAuthenticated) {
        return false;
      }

      if (token.role == ROLE.ADMIN) {
        return true;
      }

      return false;
    }
  }
};

export default auth;
