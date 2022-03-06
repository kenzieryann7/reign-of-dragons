//import Datastore from "@/helpers/datastore";

const app = {
  state: {
    value: "",
    name: "",
    isReady: false
  },
  mutations: {
    SET_VALUE(state, value) {
      state.value = value;
    },
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_READY(state, value) {
      state.isReady = value;
    }
  },
  actions: {
    mapDatastore({ commit }, value) {
      commit("SET_VALUE", value);
      commit("SET_READY", true);
    },
    setValue({ commit }, value) {
      commit("SET_VALUE", value);
      commit("SET_READY", true);
    },
    save({ state }) {
      console.log("here", state);
      //Datastore.writeDatastore(state);
    }
  },
  getters: {
    getValue(state) {
      return state.value;
    },
    getName(state) {
      return state.name;
    },
    isReady(state) {
      return state.isReady;
    },
    payload(state) {
      return {
        value: state.value,
        isReady: state.isReady
      };
    }
  }
};

export default app;
