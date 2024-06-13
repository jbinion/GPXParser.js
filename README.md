# Why forked?

I needed to parse out color

# Changes

This is completely different from the original and should probably be its own thing. GPX is just XML. It can be converted to JSON, then parsed. You probably
dont need a gpx-parsing package.

# How to do

### Install from npm

`npm install --save @jbinion/gpxparser`

From a node.js script :

```js
let gpxParser = require("gpxparser");
```

### Create and parse file

```js
const { wapoints, tracks } = gpxParser("<xml><gpx></gpx></xml>"); //parse gpx file from string data
```
