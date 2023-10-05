import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
});

export default createStore({
  state() {
    return {
      user: {
        name: null,
        email: null,
        permissionLevel: null,
        token: null,
      },
      socketId: null,
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setSocketId(state, payload) {
      state.socketId = payload;
    },
    logout(state) {
      state.user = {
        name: null,
        email: null,
        permissionLevel: null,
        token: null,
      };
      state.socketId = null;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit('setUser', payload);
    },
    setSocketId({ commit }, payload) {
      commit('setSocketId', payload);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getSocketId(state) {
      return state.socketId;
    },
  },
  plugins: [vuexPersist.plugin],
});
