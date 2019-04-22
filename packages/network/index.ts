if (process.env.CYPRESS_ENV !== 'production') {
  require('@packages/ts/register')
}

import agent from './lib/agent'
import socket from './lib/socket'
import * as connect from './lib/connect'

export { agent }
export { socket }
export { connect }
