/* eslint-disable no-console, no-unused-vars */

const Promise = require('bluebird')
const humanInterval = require('human-interval')
const cypress = require('./cli')

const oneHour = humanInterval('1 hour')
const fiveMinutes = humanInterval('5 minutes')

const run = () => {
  return cypress.run({
    project: '/tmp/repo',
    dev: true,
    config: {
      video: false,
    },
  })
  .timeout(fiveMinutes)
  .then((res) => {
    if (res.totalFailed === 0) {
      return run()
    }

    return res
  })
  .catch(Promise.TimeoutError, (err) => {
    console.log('exiting after 5 minute timeout')

    throw new Error('timeout on an individual run')
  })
}

// run for a maximum of 1 hour
// and then stop
run()
.timeout(oneHour)
.then(console.log)
.catch(Promise.TimeoutError, (err) => {
  console.log('exiting due to 1 hour timeout')

  throw err
})
.catch(() => {
  process.exit(1)
})
