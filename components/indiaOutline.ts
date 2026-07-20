/**
 * Simplified India boundary, derived from Natural Earth's 1:110m admin-0
 * country dataset (via the `world-atlas` package) — not hand-drawn. The
 * outer ring was extracted, reduced with Douglas-Peucker simplification,
 * and projected with an equirectangular transform corrected for cos(lat)
 * so relative proportions stay accurate. Waypoint coordinates below were
 * run through the identical projection, so their positions are genuinely
 * correct relative to the outline rather than eyeballed.
 */
// Extra left/top margin beyond the raw path bounds so waypoint labels that
// hang to the left of the coastline (Mumbai, NDA Khadakwasla) have room and
// don't clip against the SVG canvas edge.
export const INDIA_VIEWBOX = "-64 -16 379.8 336";

export const INDIA_PATH =
  "M 309.0,86.9 L 309.8,91.2 L 306.1,93.2 L 307.0,100.1 L 299.5,98.1 L 286.1,105.8 L 286.4,112.2 L 280.2,127.0 L 275.5,136.3 L 267.4,133.7 L 265.8,153.9 L 260.6,156.5 L 255.1,138.8 L 252.3,138.8 L 250.6,145.9 L 244.9,140.2 L 248.1,133.8 L 252.7,133.1 L 257.5,123.7 L 232.0,120.4 L 231.1,112.6 L 217.9,107.2 L 214.2,114.8 L 221.7,120.7 L 212.9,129.0 L 219.3,132.0 L 217.6,138.7 L 222.8,156.3 L 221.3,160.4 L 201.4,162.6 L 202.0,171.0 L 196.5,177.6 L 181.5,185.2 L 169.9,198.3 L 151.7,212.7 L 151.7,217.9 L 132.3,225.2 L 129.1,233.8 L 131.9,257.6 L 127.5,268.2 L 127.4,287.2 L 122.0,287.8 L 117.3,296.3 L 120.5,300.0 L 111.0,303.2 L 103.3,314.0 L 93.5,303.5 L 84.7,276.6 L 75.5,260.6 L 71.1,239.6 L 61.7,224.2 L 54.3,188.2 L 52.3,164.2 L 37.2,170.9 L 29.8,169.5 L 16.3,156.0 L 21.3,151.9 L 18.2,147.5 L 6.0,138.1 L 12.9,130.6 L 35.8,130.6 L 33.7,121.0 L 27.9,115.3 L 26.7,106.7 L 19.9,101.7 L 31.4,90.0 L 43.5,90.8 L 70.9,56.5 L 70.8,48.5 L 79.6,42.1 L 71.2,36.5 L 63.9,19.2 L 69.0,14.3 L 84.8,17.1 L 96.4,15.4 L 106.4,6.0 L 117.6,19.1 L 116.5,28.2 L 120.7,34.0 L 120.3,39.7 L 112.9,38.2 L 115.8,50.5 L 140.4,65.4 L 133.9,70.5 L 129.8,81.0 L 163.2,97.0 L 177.5,98.4 L 183.5,104.1 L 212.7,107.6 L 213.3,91.2 L 219.7,88.9 L 220.7,99.9 L 230.2,104.2 L 254.0,102.8 L 254.7,96.0 L 250.5,92.4 L 258.9,91.0 L 280.3,75.6 L 289.0,78.3 L 296.4,73.6 L 301.3,80.5 L 297.8,85.2 L 309.0,86.9 Z";

export type Waypoint = {
  name: string;
  year: string;
  note: string;
  x: number;
  y: number;
  labelSide: "left" | "right";
};

// Chronological order — this is also the order the route line draws in.
export const WAYPOINTS: Waypoint[] = [
  { name: "Kozhikode", year: "1977", note: "Born", x: 85.0, y: 277.3, labelSide: "right" },
  { name: "Bengaluru", year: "1977–95", note: "Raised & schooled", x: 103.8, y: 258.0, labelSide: "right" },
  { name: "NDA, Khadakwasla", year: "1995", note: "Joined the Academy", x: 64.2, y: 196.4, labelSide: "left" },
  { name: "IMA, Dehradun", year: "1999", note: "Commissioned, 7 Bihar", x: 108.4, y: 63.9, labelSide: "right" },
  { name: "Siachen / Kargil", year: "1999", note: "Op Vijay & Siachen", x: 98.9, y: 6.8, labelSide: "right" },
  { name: "Mumbai, Taj Hotel", year: "2008", note: "Operation Black Tornado", x: 54.4, y: 191.4, labelSide: "left" },
];
