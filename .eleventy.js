module.exports = function (eleventy) {
  eleventy.addCollection('pages', (collection) => {
    return collection.getFilteredByGlob('pages/**')
  })

  // return {}

  return {
    dir: {
      input: ".src"
    }
  }
}
