import execa = require('execa');
import randomstring from 'randomstring'

const e2e = require('../support/helpers/e2e')

function createUser (username) {
  return execa.shell(`adduser --disabled-password --gecos "" --home /home/person --force-badname ${username}`)
  .then(({ stdout }) => {
    return new RegExp(`new user .${username}. \\((\\d+)\\)`).exec(stdout)[1]
  })
  .then(Number)
}

describe('e2e linux non-root spec', function () {
  e2e.setup()

  before(() => {
    if (process.platform !== 'linux' || process.geteuid() !== 0) {
      throw new Error('This spec must be run as root on a Linux system. Try `npm run docker`')
    }
  })

  e2e.it('can run a simple spec as a non-root user', {
    spec: 'spec.ts',
    expectedExitCode: 0,
    snapshot: true,
    onRun (exec) {
      const username = `cy-${randomstring.generate({ length: 10 })}`

      return createUser(username)
      .then((uid) => {
        expect(uid).to.be.gt(0)

        return exec({
          uid,
        })
      })
    },
  })
})
