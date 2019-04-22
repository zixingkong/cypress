const _ = require('lodash')
const debug = require('debug')('cypress:network:socket')

const setNoDelay = (socket) => {
  if (socket && !socket.__setNoDelay__) {
    socket.__id__ = _.uniqueId('socket')
    socket.__setNoDelay__ = true
    socket.setNoDelay(true)

    debug('received socket for agent request', {
      id: socket.__id__,
    })
  }
}

module.exports = {
  setNoDelay,
}
