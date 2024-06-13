const formatWpt = (wptObj) => {
  const { lat, lon } = wptObj.wpt;
  let name = "";
  wptObj.wpt.children.forEach((node) => {
    if (Object.keys(node)[0] === "name") {
      name = node.name.content;
    }
  });

  return { name, latitude: lat, longitude: lon };
};

module.exports = formatWpt;
