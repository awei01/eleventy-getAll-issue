module.exports = function (eleventy) {
  eleventy.addCollection('pages', (collection) => {
    return collection.getFilteredByGlob('pages/**')
  })

  /**
  Comment out the following line to see the bug occur
  */
  return {}

  return {
    dir: {
      input: ".src"
    }
  }
}
