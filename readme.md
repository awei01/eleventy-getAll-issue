# Issue with getFilteredByGlob()

## Steps to reproduce
* clone this repository
* cd into the directory
* run `DEBUG=Eleventy.TemplateMap npm run eleventy`
* Note that the collections are generated correctly. The debug log shows:

```
  Eleventy:TemplateMap Caching collections objects. +0ms
  Eleventy:TemplateMap Collection: collections.all size: 4 +3ms
  Eleventy:TemplateMap Collection: collections.pages size: 2 +4ms
```

* Comment out line 9 in `.eleventy.js`
* run `DEBUG=Eleventy.TemplateMap npm run eleventy`
* Note that the collections are NOT generated correctly. The debug log shows:

```
  Eleventy:TemplateMap Caching collections objects. +0ms
  Eleventy:TemplateMap Collection: collections.all size: 1 +2ms
  Eleventy:TemplateMap Collection: collections.pages size: 0 +4ms
```

## Notes
* I used `.src` instead of `src` because `eleventy` will otherwise pick up the `src` directory in processing when using the default `dir.input`. This is purely to better illustrate the bug.
* I'm using symlinks but the bug should still occur if we moved the folders into the `dir.input` folder
* I'm using `collection.getFilteredByGlob()` instead of `collection.getAll()` because this is how I first stumbled upon the bug, but you'll see that `getAll()` doesn't seem to locate the `pages` folder
