"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { INDIA_PATH, INDIA_VIEWBOX, WAYPOINTS } from "./indiaOutline";

const LEADER_REACH = 24; // how far each label's leader line reaches into the map's margin
const APPEAR = 0.4; // time for a marker/label/caption to fade or draw in
const CAPTION_FADE = 0.35; // time for the outgoing caption to fade before the next one's turn
const PAUSE = 1.6; // how long the line rests at a point before continuing on
const START_DELAY = 0.3; // when the journey starts
const MIN_ROW_GAP = 56; // minimum vertical space between two map labels on the same side

function segDuration(dist: number) {
  return Math.min(2.2, Math.max(0.6, dist / 60)); // how long the line takes to travel one hop
}

// Arrival time at each waypoint, distance-weighted so the line travels at a
// roughly constant pace, with a pause at every stop before it moves on.
const ARRIVE: number[] = [START_DELAY];
WAYPOINTS.slice(1).forEach((w, i) => {
  const prev = WAYPOINTS[i];
  const dist = Math.hypot(w.x - prev.x, w.y - prev.y);
  ARRIVE.push(ARRIVE[i] + PAUSE + segDuration(dist));
});

// Push overlapping map labels apart (top to bottom), per side, so two stops
// that sit close together geographically never collide once both are shown.
function layoutRows(indices: number[]): Map<number, number> {
  const sorted = [...indices].sort((a, b) => WAYPOINTS[a].y - WAYPOINTS[b].y);
  const rows = new Map<number, number>();
  let last = -Infinity;
  for (const i of sorted) {
    const y = Math.max(WAYPOINTS[i].y, last + MIN_ROW_GAP);
    rows.set(i, y);
    last = y;
  }
  return rows;
}
const ROW_Y = new Map([
  ...layoutRows(WAYPOINTS.map((w, i) => (w.labelSide === "left" ? i : -1)).filter((i) => i >= 0)),
  ...layoutRows(WAYPOINTS.map((w, i) => (w.labelSide === "right" ? i : -1)).filter((i) => i >= 0)),
]);

export function JourneyMap() {
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const show = inView || !!reduced;

  return (
    <div className="mst-journey">
      <p className="mst-mono-tag" style={{ marginBottom: 4, textAlign: "center" }}>The Route &middot; 1977&ndash;2008</p>
      <h3 className="mst-journey-title">Kozhikode to the Taj</h3>

      <div className="mst-journey-body">
        <div className="mst-journey-caption-zone mst-journey-caption-zone--left">
          {WAYPOINTS.map((w, i) => w.labelSide === "left" && <Caption key={w.name} w={w} i={i} show={show} reduced={!!reduced} />)}
        </div>

        <div className="mst-journey-map">
          <svg ref={ref} viewBox={INDIA_VIEWBOX} className="mst-journey-svg">
            <path d={INDIA_PATH} className="mst-journey-outline" />

            {/* the thick route line, travelling one hop at a time in order */}
            {WAYPOINTS.slice(1).map((w, i) => {
              const a = WAYPOINTS[i];
              const segStart = reduced ? 0 : ARRIVE[i] + PAUSE;
              const segEnd = reduced ? 0 : ARRIVE[i + 1];
              return (
                <motion.path
                  key={w.name}
                  d={`M ${a.x},${a.y} L ${w.x},${w.y}`}
                  className="mst-journey-route"
                  initial={{ pathLength: 0 }}
                  animate={show ? { pathLength: 1 } : undefined}
                  transition={reduced ? { duration: 0 } : { delay: segStart, duration: segEnd - segStart, ease: "linear" }}
                />
              );
            })}

            {WAYPOINTS.map((w, i) => {
              const dir = w.labelSide === "right" ? 1 : -1;
              const rowY = ROW_Y.get(i)!;
              const bendX = w.x + dir * (LEADER_REACH * 0.55);
              const leaderD = `M ${w.x + dir * 5},${w.y} L ${bendX},${rowY} L ${w.x + dir * LEADER_REACH},${rowY}`;
              const textX = w.x + dir * (LEADER_REACH + 5);
              const anchor = w.labelSide === "right" ? "start" : "end";
              const arrive = ARRIVE[i];

              return (
                <g key={w.name}>
                  <motion.circle
                    cx={w.x}
                    cy={w.y}
                    r={4.6}
                    className="mst-journey-pulse"
                    initial={{ opacity: 0.55, scale: 1 }}
                    animate={show ? { opacity: 0, scale: 2.6 } : undefined}
                    transition={reduced ? { duration: 0 } : { delay: arrive, duration: 0.7 }}
                    style={{ transformOrigin: `${w.x}px ${w.y}px` }}
                  />
                  {/* everything below appears once, at arrival, and stays */}
                  <motion.circle
                    cx={w.x}
                    cy={w.y}
                    r={4.6}
                    className="mst-journey-dot"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={show ? { opacity: 1, scale: 1 } : undefined}
                    transition={reduced ? { duration: 0 } : { delay: arrive, duration: 0.3 }}
                    style={{ transformOrigin: `${w.x}px ${w.y}px` }}
                  />
                  <motion.path
                    d={leaderD}
                    className="mst-journey-leader"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={show ? { pathLength: 1, opacity: 1 } : undefined}
                    transition={reduced ? { duration: 0 } : { delay: arrive, duration: APPEAR }}
                  />
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={show ? { opacity: 1 } : undefined}
                    transition={reduced ? { duration: 0 } : { delay: arrive + 0.1, duration: APPEAR }}
                  >
                    <text x={textX} y={rowY - 15} textAnchor={anchor} className="mst-journey-label-name">
                      {w.name}
                    </text>
                    <text x={textX} y={rowY - 4} textAnchor={anchor} className="mst-journey-label-year">
                      {w.year}
                    </text>
                    <text x={textX} y={rowY + 9} textAnchor={anchor} className="mst-journey-label-story">
                      {w.story[0]}
                    </text>
                    <text x={textX} y={rowY + 20} textAnchor={anchor} className="mst-journey-label-story">
                      {w.story[1]}
                    </text>
                  </motion.g>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mst-journey-caption-zone mst-journey-caption-zone--right">
          {WAYPOINTS.map((w, i) => w.labelSide === "right" && <Caption key={w.name} w={w} i={i} show={show} reduced={!!reduced} />)}
        </div>
      </div>
    </div>
  );
}

function Caption({
  w,
  i,
  show,
  reduced,
}: {
  w: (typeof WAYPOINTS)[number];
  i: number;
  show: boolean;
  reduced: boolean;
}) {
  const isLast = i === WAYPOINTS.length - 1;
  const arrive = ARRIVE[i];

  if (isLast) {
    return (
      <motion.p
        className="mst-journey-caption"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : undefined}
        transition={reduced ? { duration: 0 } : { delay: arrive, duration: APPEAR }}
      >
        <span className="yr">{w.year}</span>
        {w.caption}
      </motion.p>
    );
  }

  const dur = ARRIVE[i + 1] - arrive; // this caption's whole turn, until the next stop arrives
  const times = [0, APPEAR / dur, 1 - CAPTION_FADE / dur, 1];

  return (
    <motion.p
      className="mst-journey-caption"
      initial={{ opacity: 0 }}
      animate={show ? { opacity: [0, 1, 1, 0] } : undefined}
      transition={reduced ? { duration: 0 } : { delay: arrive, duration: dur, times }}
    >
      <span className="yr">{w.year}</span>
      {w.caption}
    </motion.p>
  );
}
