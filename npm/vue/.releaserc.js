module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
  ],
  extends: 'semantic-release-monorepo',
  branches: [
    // '@cypress/vue@0.x',
    // '@cypress/vue@1.0.0',
    // { name: 'chore-prerelease-for-vue', channel: 'latest', prerelease: 'alpha' },
    // 2.x.x-alpha
    // { name: 'vue-3', prerelease: true, channel: '2.x.x-alpha' },
    // 1.x.x-alpha
    // { name: 'master', prerelease: true, channel: '1.x.x-alpha' },
  ],
}

// push
// 1.0.0-alpha.1
// 1.0.0-alpha.2
