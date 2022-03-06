const datastore = {
  namespaced: true,
  state: {
    value: {},
    loaded: false,
    lastRead: "",
    lastWrite: ""
  },
  mutations: {
    SET_VALUE(state, value) {
      state.value = value;
    },
    SET_LOADED(state, loaded) {
      state.loaded = loaded;
    }
  },
  actions: {
    setValue({ commit }, value) {
      commit("SET_VALUE", value);
      commit("SET_LOADED", true);
    }
  },
  getters: {
    getValue(state) {
      return state.value;
    },
    isLoaded(state) {
      return state.loaded;
    },
    payload(state) {
      return {
        value: state.value,
        loaded: state.loaded
      };
    }
  }
};

export default datastore;
