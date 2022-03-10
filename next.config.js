module.exports = {
    generateBuildId: async () => {
      // You can, for example, get the latest git commit hash here
      return 'my-build-id'
    },
    images: {
      domains: ['20.118.203.121', 'hexagon.com']
    }
  }