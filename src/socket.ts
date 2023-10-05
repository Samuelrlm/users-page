// websocketService.js
import { io } from 'socket.io-client';

const socket = io('http://localhost:4707/', { transports: ['websocket'], autoConnect: false });

export default {
  connect() {
    socket.connect();
  },

  disconnect() {
    socket.disconnect();
  },

  on(event: any, callback: any) {
    socket.on(event, callback);
  },

  emit(event: any, data: any) {
    socket.emit(event, data);
  },
};
