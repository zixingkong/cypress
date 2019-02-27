import * as fs from 'fs'
import * as path from 'path'
import * as server from 'socket.io'
import * as client from './client'

const clientPath = require.resolve('socket.io-client')

const pkg = JSON.parse(fs.readFileSync(path.join(clientPath, '../../package.json')).toString())

export { server, client }

export function getPathToClientSource () {
  // clientPath returns the path to socket.io-client/lib/index.js
  // so walk up two levels to get to the root
  return path.join(clientPath, '..', '..', 'dist', 'socket.io.js')
}

export function getClientVersion () {
  return pkg.version
}

export function getClientSource () {
  return fs.readFileSync(getPathToClientSource(), 'utf8')
}
