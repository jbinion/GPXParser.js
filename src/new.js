const { convertXML } = require("simple-xml-to-json");
const formatTrk = require("./formatTrk");
const formatWpt = require("./formatWpt");

const main = (gpxString) => {
  const { gpx } = convertXML(gpxString);

  const nodes = gpx.children;
  const waypoints = [];
  const tracks = [];

  nodes.forEach((node) => {
    const type = Object.keys(node)[0];
    if (type === "trk") {
      tracks.push(formatTrk(node.trk));
    }
    if (type === "wpt") {
      waypoints.push(formatWpt(node));
    }
  });

  return { waypoints, tracks };
};

module.exports = main;
