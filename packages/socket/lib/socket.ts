import * as fs from 'fs'
import * as path from 'path'
import server from 'socket.io'
import { version } from 'socket.io-client/package.json'
import client from './client'

const clientPath = require.resolve('socket.io-client')

export { server, client }

export function getPathToClientSource () {
  // clientPath returns the path to socket.io-client/lib/index.js
  // so walk up two levels to get to the root
  return path.join(clientPath, '..', '..', 'dist', 'socket.io.js')
}

export function getClientVersion () {
  return version
}

export function getClientSource () {
  return fs.readFileSync(getPathToClientSource(), 'utf8')
}
