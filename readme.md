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
