let path = require("path");
const main = require("../src/index.js");
let fs = require("fs");

describe("index", () => {
  const filePath = path.join(__dirname, "./test.gpx");
  const data = fs.readFileSync(filePath, "utf8");
  it("should ", () => {
    const { waypoints, tracks } = main(data);
    console.log(tracks[0]);
    expect(tracks[0].name).toBe("Con");
    expect(tracks[0].color).toBe("Blue");
    expect(waypoints[0].name).toBe("Trailhead");
  });
});
