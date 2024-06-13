const formatTrk = (trk) => {
  console.log(trk);
  const name = trk.children[0].name.content;
  const color =
    trk.children[1]?.extensions?.children[0]["gpxx:TrackExtension"].children[0][
      "gpxx:DisplayColor"
    ].content || "orange";
  const waypoints =
    trk.children[2]?.trkseg.children.map((t) => formatTrkpt(t.trkpt)) || [];
  return { name, color, waypoints };
};

/**
 * @param {Object} trkpt
 * @param {string} trkpt.lat
 * @param {string} trkpt.long
 */
const formatTrkpt = (trkpt) => {
  const { lat, lon } = trkpt;
  return { latitude: Number(lat), longitude: Number(lon) };
};
module.exports = formatTrk;
