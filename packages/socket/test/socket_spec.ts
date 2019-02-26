/* global describe, it, context */

import * as fs from 'fs'
import * as path from 'path'
import server from 'socket.io'
import client from 'socket.io-client'
import { expect } from 'chai'
import pkg = require('../package.json')
import * as lib from '../lib/socket'

describe('Socket', function () {
  it('exports server', function () {
    expect(lib.server).to.eq(server)
  })

  it('exports client', function () {
    expect(lib.client).to.eq(client)
  })

  context('.getPathToClientSource', function () {
    it('returns path to socket.io.js', function () {
      const clientPath = path.join(process.cwd(), 'node_modules', 'socket.io-client', 'dist', 'socket.io.js')
      expect(lib.getPathToClientSource()).to.eq(clientPath)
    })

    it('makes sure socket.io.js actually exists', function (done) {
      fs.stat(lib.getPathToClientSource(), done)
    })
  })

  context('.getClientVersion', function () {
    it('returns client version', function () {
      expect(lib.getClientVersion()).to.eq(pkg.dependencies['socket.io-client'])
    })
  })

  context('.getClientSource', function () {
    it('returns client source as a string', function (done) {
      const clientPath = path.join(process.cwd(), 'node_modules', 'socket.io-client', 'dist', 'socket.io.js')

      fs.readFile(clientPath, 'utf8', function (err: Error, str: string) {
        if (err) done(err)

        expect(lib.getClientSource()).to.eq(str)
        done()
      })
    })
  })
})
