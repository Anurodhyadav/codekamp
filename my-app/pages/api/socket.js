import { Server } from 'socket.io'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      socket.on('input-change', msg_and_user => {
        socket.broadcast.emit('update-input', msg_and_user);
      })
      // socket.emit('news', { hello: 'world' });
      // socket.on('user', function (data) {
      //   socket.broadcast.emit('broad-cast-user', data);
      // })
    })
  }
  res.end()
}

export default SocketHandler