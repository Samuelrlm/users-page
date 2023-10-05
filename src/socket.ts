// websocketService.js
import { io } from 'socket.io-client'
import store from './store/store'

function getWebSocketIdFromLocalStorage() {
  return localStorage.getItem('websocketId');
}

let websocketIdLocal = getWebSocketIdFromLocalStorage();

const socket = io('http://localhost:4707/', {
  transports: ['websocket'],
  autoConnect: true,
  query: {
    "socketId": websocketIdLocal
  }
})

socket.on('connect', () => {
  websocketIdLocal = socket.id;

  localStorage.setItem('websocketId', websocketIdLocal);

  store.commit('setSocketId', websocketIdLocal);
})

export default {
  connect() {
    socket.connect()
  },

  disconnect() {
    socket.disconnect()
  },

  on(event: any, callback: any) {
    socket.on(event, callback)
  },

  emit(event: any, data: any) {
    socket.emit(event, data)
  },

  getWebsocketId() {
    return websocketIdLocal
  }
}
