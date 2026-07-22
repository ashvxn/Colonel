/**
 * India boundary per the Survey of India's official map — includes the
 * full extent of Jammu & Kashmir/Ladakh (Pakistan-occupied Kashmir,
 * Gilgit-Baltistan, Aksai Chin, Shaksgam Valley), not the internationally
 * "de facto" Line-of-Control boundary many Western map datasets use.
 *
 * Source: DataMeet's india-composite.geojson (CC-0), which compiles India +
 * disputed territories specifically to match the Survey of India's official
 * boundary (https://github.com/datameet/maps/blob/master/Country/README.md).
 * The mainland outer ring was decimated + Douglas-Peucker simplified
 * (242k -> ~180 points) and projected with an equirectangular transform
 * corrected for cos(lat) so proportions stay accurate — not hand-drawn.
 * Waypoint coordinates were run through the identical projection, so their
 * positions are genuinely correct relative to the outline.
 */
export const INDIA_VIEWBOX = "-115 -20 413.3 385";

export const INDIA_PATH =
  "M 97.6,23.1 L 115.8,17.9 L 122.6,23.8 L 125.6,22.9 L 122.6,31.4 L 117.4,33.8 L 115.8,38.9 L 111.4,38.7 L 111.5,45.4 L 116.1,47.5 L 117.3,53.0 L 111.8,56.5 L 109.6,52.7 L 106.2,54.4 L 109.9,60.2 L 110.0,67.4 L 113.1,65.9 L 116.3,70.4 L 132.1,79.1 L 125.5,84.0 L 122.6,93.8 L 140.5,104.1 L 148.4,105.5 L 148.7,107.8 L 154.4,109.6 L 162.5,107.7 L 173.0,115.7 L 177.0,114.5 L 179.2,117.7 L 200.3,119.9 L 201.6,103.0 L 206.6,101.3 L 209.0,104.0 L 207.6,111.6 L 211.5,115.2 L 240.5,114.6 L 240.7,110.1 L 236.1,108.0 L 236.0,105.1 L 243.7,104.6 L 265.6,88.7 L 271.3,91.1 L 278.1,88.1 L 284.4,93.9 L 282.7,97.2 L 285.6,96.1 L 292.2,102.3 L 287.4,106.6 L 289.9,112.1 L 285.5,109.2 L 280.9,110.2 L 270.3,117.3 L 270.7,123.0 L 265.3,130.2 L 266.1,135.1 L 260.6,146.6 L 252.5,144.1 L 253.0,154.2 L 250.5,155.2 L 251.2,163.5 L 248.4,166.8 L 246.4,164.6 L 245.4,166.4 L 242.2,148.0 L 239.0,147.8 L 235.7,156.3 L 231.2,149.0 L 233.3,143.8 L 238.5,143.5 L 241.1,140.6 L 243.6,134.1 L 218.3,131.3 L 216.7,121.2 L 215.7,124.1 L 213.6,123.7 L 211.0,119.6 L 206.8,121.0 L 204.2,117.1 L 205.4,119.9 L 201.3,125.6 L 210.1,131.6 L 204.6,132.2 L 200.5,137.8 L 207.5,142.0 L 205.7,148.7 L 208.1,150.3 L 207.3,152.9 L 210.0,153.3 L 208.6,155.5 L 211.0,170.2 L 207.5,169.7 L 207.1,165.4 L 202.6,170.8 L 200.6,163.9 L 202.1,165.0 L 198.3,169.4 L 189.5,173.5 L 191.0,179.8 L 184.4,187.8 L 171.3,193.9 L 162.0,205.6 L 145.5,217.8 L 144.3,224.0 L 134.3,226.9 L 131.0,232.9 L 128.4,231.2 L 124.5,233.4 L 122.4,240.2 L 125.3,258.4 L 119.6,275.7 L 120.7,290.2 L 115.0,290.8 L 111.2,299.3 L 113.8,301.2 L 105.9,303.3 L 102.9,310.8 L 97.7,313.9 L 88.1,305.2 L 81.4,281.7 L 74.7,271.9 L 66.9,245.4 L 57.9,229.4 L 51.9,201.2 L 53.9,197.9 L 53.2,196.1 L 51.3,198.7 L 52.2,192.5 L 50.0,189.1 L 52.4,179.5 L 49.4,173.7 L 52.4,169.6 L 48.7,169.7 L 50.8,166.3 L 48.5,166.8 L 52.4,163.4 L 47.0,162.9 L 44.6,174.7 L 32.0,180.1 L 13.5,163.1 L 25.1,160.7 L 28.2,156.0 L 16.3,157.4 L 8.6,150.3 L 12.1,146.2 L 6.2,149.3 L 12.2,141.7 L 24.0,143.2 L 34.8,140.8 L 30.5,127.1 L 25.4,125.3 L 25.7,118.4 L 18.9,115.3 L 19.7,111.7 L 27.6,102.4 L 32.1,105.6 L 42.5,102.8 L 47.2,94.5 L 52.9,91.3 L 57.4,81.8 L 62.8,79.2 L 62.4,76.2 L 69.8,70.0 L 68.1,69.3 L 68.8,61.7 L 76.6,57.6 L 69.8,54.9 L 69.9,51.2 L 59.6,48.5 L 57.6,33.6 L 64.2,26.6 L 54.3,19.1 L 49.3,19.3 L 48.8,15.5 L 53.8,10.4 L 61.6,10.0 L 60.2,7.9 L 76.8,7.4 L 97.6,23.1 Z";

export type Waypoint = {
  name: string;
  year: string;
  /** A short two-line label drawn on the map itself — pre-broken so it never needs runtime wrapping. */
  story: [string, string];
  /** The fuller sentence shown in the running caption list beside the map. */
  caption: string;
  x: number;
  y: number;
  labelSide: "left" | "right";
};

// Chronological order — this is also the order the route line draws in.
export const WAYPOINTS: Waypoint[] = [
  {
    name: "Kozhikode", year: "1977", story: ["Born in Kozhikode,", "Kerala."],
    caption: "Born here on 15 March 1977, the son of a retired ISRO officer.",
    x: 80.5, y: 280.3, labelSide: "right",
  },
  {
    name: "Bengaluru", year: "1977–95", story: ["Raised & schooled;", "dreamed only of the Army."],
    caption: "Grew up dreaming only of a soldier's life, and never wavered from it.",
    x: 98.3, y: 262.0, labelSide: "right",
  },
  {
    name: "NDA, Khadakwasla", year: "1995", story: ["Joined the National", "Defence Academy."],
    caption: "Entered the National Defence Academy — 94th Course, Oscar Squadron.",
    x: 60.9, y: 203.6, labelSide: "left",
  },
  {
    name: "IMA, Dehradun", year: "1999", story: ["Commissioned into", "7 Bihar Regiment."],
    caption: "Commissioned into the 7th Battalion, Bihar Regiment, on 12 June 1999.",
    x: 102.6, y: 77.9, labelSide: "right",
  },
  {
    name: "Siachen / Kargil", year: "1999", story: ["Fought in Op Vijay;", "served on Siachen."],
    caption: "Deployed along the Line of Control in Operation Vijay, 1999; later served on the Siachen Glacier.",
    x: 93.6, y: 23.8, labelSide: "right",
  },
  {
    name: "Mumbai, Taj Hotel", year: "2008", story: ["Led Op Black Tornado;", "fell defending hostages."],
    caption: "Led Operation Black Tornado at the Taj — and fell defending hostages, 28 Nov 2008.",
    x: 51.6, y: 198.9, labelSide: "left",
  },
];
