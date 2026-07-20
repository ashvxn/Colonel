import { Icon } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

const INITIATIVES = [
  { icon: "archive", title: "Gallantry Archives & Memorial Wall", body: "A permanent digital record of Major Unnikrishnan's citations, photographs, and the testimonies of those he served with." },
  { icon: "file", title: "Scholarship Application Portal", body: "An online portal for students to apply directly for STEM and Defense Studies scholarships, with document upload and status tracking." },
  { icon: "calendar", title: "Annual Commemoration Registration", body: "Registration for the annual 28 November commemoration ceremony held in honour of Major Unnikrishnan and 26/11 personnel." },
];

export function Initiatives() {
  return (
    <section className="mst-section" id="initiatives">
      <div className="mst-wrap">
        <div className="mst-section-head">
          <div>
            <p className="mst-eyebrow">What&apos;s Next</p>
            <h2 className="mst-h2" style={{ marginTop: 12 }}>Upcoming initiatives</h2>
          </div>
          <p className="mst-lede">Modules in active development for future release on this site.</p>
        </div>

        <div className="mst-grid3">
          {INITIATIVES.map((item, idx) => (
            <RevealOnScroll key={item.title} className="mst-card mst-init" delay={idx * 0.08}>
              <span className="cnr tl" />
              <span className="cnr br" />
              <span className="mst-soon">In Development</span>
              <Icon name={item.icon} style={{ width: 24, height: 24, color: "var(--c-olive)", marginBottom: 14, display: "block" }} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <button className="mst-btn" disabled>Notify Me</button>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
