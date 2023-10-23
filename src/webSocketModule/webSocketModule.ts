import useWebsocket from '../socket';

const state = {
  socket: null,
};

const mutations = {
  setSocket(state: any, socket: any) {
    state.socket = socket;
  },
};

const actions = {
  initializeWebSocket({ commit }: any) {
    const socket = useWebsocket;
    commit('setSocket', socket);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
