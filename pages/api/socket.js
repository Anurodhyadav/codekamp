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
        socket.on('code-submit', code_submition => {
            socket.broadcast.emit('user-submit-code', code_submition);
        })
        socket.on('user-online', user => {
            socket.broadcast.emit('broadcast-user', user);
        })
        
      socket.on('match-found', matchedDetails => {
        socket.broadcast.emit('set-match', matchedDetails);
        })
    })
  }
  res.end()
}

export default SocketHandler