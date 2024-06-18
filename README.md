# Why forked?

I needed to parse out color for a weekend project.

# Changes

Just like everything.

# Usage

### Install from npm

`npm install --save @jbinion/gpxparser`

From a node.js script :

```js
const gpxParser = require("gpxparser");

const { wapoints, tracks } = gpxParser("<xml><gpx></gpx></xml>"); //parse gpx file from string data
```
