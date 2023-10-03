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
        name: '',
        email: '',
        permissionLevel: 0,
        token: ''
      },
    }
  },
  mutations: {
    setUser(state: { user: any; }, payload: any) {
      state.user = payload
    },
    logout(state: { user: { name: string; email: string; permissionLevel: number; token: string;} }) {
      state.user = {
        name: '',
        email: '',
        permissionLevel: 0,
        token: ''
      }
    }
  },
  actions: {
    setUser({ commit }: any, payload: any) {
      commit('setUser', payload)
    },
    logout({ commit }: any) {
      commit('logout')
    }
  },
  getters: {
    getUser(state: { user: any; }) {
      return state.user
    }
  },
  plugins: [vuexPersist.plugin],
});
