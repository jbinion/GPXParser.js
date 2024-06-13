const formatTrk = (trk) => {
  const name = trk.children[0].name.content;
  const color =
    trk.children[1]?.extensions?.children[0]["gpxx:TrackExtension"].children[0][
      "gpxx:DisplayColor"
    ].content || "red";
  const waypoints =
    trk.children[2]?.trkseg.children.map((t) => formatTrkpt(t)) || [];
  return { name, color, waypoints };
};

/**
 * @param trkptObj an object with one field -- trkpt
 * @param trkptObj.trkpt the track point
 * @param trkptObj.trkpt.lat
 * @param trkptObj.trkpt.long
 * @param trakObj.trkpt.children
 */
const formatTrkpt = (trkptObj) => {
  const { lat, lon } = trkptObj.trkpt;
  return { latitude: Number(lat), longitude: Number(lon) };
};
module.exports = formatTrk;
