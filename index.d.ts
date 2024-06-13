export type Waypoint = {
  name: string;
  latitude: number;
  longitude: number;
};

export type Track = {
  name: string;
  color: string;
  waypoints: Point[];
};

export type Point = {
  latitude: number;
  longitude: number;
};

export default GpxParser;
