import { createStore } from "vuex";

import app from "@/store/app";
import auth from "@/store/auth";
import datastore from "@/store/datastore";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    datastore,
    app
  },
  getters: {}
});

export default store;
