"use client";

import { motion, useReducedMotion } from "framer-motion";
import { INDIA_PATH, INDIA_VIEWBOX, WAYPOINTS } from "./indiaOutline";

const routeD =
  "M " + WAYPOINTS.map((w) => `${w.x},${w.y}`).join(" L ");

export function JourneyMap() {
  const reduced = useReducedMotion();

  return (
    <div className="mst-journey">
      <p className="mst-mono-tag" style={{ marginBottom: 4, textAlign: "center" }}>The Route &middot; 1977&ndash;2008</p>
      <h3 className="mst-journey-title">Kozhikode to the Taj</h3>

      <div className="mst-journey-map">
        <motion.svg
          viewBox={INDIA_VIEWBOX}
          className="mst-journey-svg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        >
          <path d={INDIA_PATH} className="mst-journey-outline" />

          <motion.path
            d={routeD}
            className="mst-journey-route"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              show: { pathLength: 1, opacity: 1 },
            }}
            transition={reduced ? { duration: 0.01 } : { duration: 1.8, ease: "easeInOut" }}
          />

          {WAYPOINTS.map((w, i) => (
            <motion.g
              key={w.name}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{
                delay: reduced ? 0 : 0.25 + i * (1.3 / WAYPOINTS.length),
                duration: 0.35,
              }}
              style={{ transformOrigin: `${w.x}px ${w.y}px` }}
            >
              <circle cx={w.x} cy={w.y} r={4.2} className="mst-journey-dot" />
              <text
                x={w.x + (w.labelSide === "right" ? 8 : -8)}
                y={w.y - 6}
                textAnchor={w.labelSide === "right" ? "start" : "end"}
                className="mst-journey-label-name"
              >
                {w.name}
              </text>
              <text
                x={w.x + (w.labelSide === "right" ? 8 : -8)}
                y={w.y + 5}
                textAnchor={w.labelSide === "right" ? "start" : "end"}
                className="mst-journey-label-note"
              >
                {w.year} &middot; {w.note}
              </text>
            </motion.g>
          ))}
        </motion.svg>
      </div>
    </div>
  );
}
