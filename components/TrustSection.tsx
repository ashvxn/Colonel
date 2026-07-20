import { Icon } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

const PILLARS = [
  { icon: "shield", title: "Veteran & Martyr Family Welfare", body: "Financial support, housing assistance, and long-term care coordination for families of fallen and disabled soldiers." },
  { icon: "users", title: "Youth Leadership Bootcamps", body: "Discipline-first residential camps for young Indians, built around the values and physical rigour of NDA-style training." },
  { icon: "book", title: "STEM & Defense Scholarships", body: "Merit and need-based scholarships for students pursuing engineering, sciences, and defense studies nationwide." },
  { icon: "pulse", title: "Community Healthcare & Relief", body: "Medical camps, emergency relief drives, and healthcare access programs in underserved garrison and border towns." },
];

export function TrustSection() {
  return (
    <section className="mst-section" id="trust">
      <div className="mst-wrap">
        <div className="mst-section-head">
          <div>
            <p className="mst-eyebrow">The Trust</p>
            <h2 className="mst-h2" style={{ marginTop: 12 }}>Carrying the mission forward</h2>
          </div>
          <p className="mst-lede">
            Established to preserve Major Unnikrishnan&apos;s legacy and extend his example of
            service into the lives of the families, soldiers, and students who need it most.
          </p>
        </div>

        <RevealOnScroll className="mst-card" style={{ marginBottom: 40 }}>
          <span className="cnr tl" />
          <span className="cnr br" />
          <p className="mst-mono-tag" style={{ marginBottom: 10 }}>Vision &amp; Mission</p>
          <p style={{ fontSize: "1.05rem", color: "var(--c-ink-soft)", maxWidth: 760 }}>
            The <b style={{ color: "var(--c-ink)" }}>Major Sandeep Unnikrishnan Ashok Chakra Memorial Foundation</b>{" "}
            exists to preserve the legacy of India&apos;s bravehearts, stand beside the families
            of fallen and serving soldiers, and open doors for underprivileged youth through
            education, discipline, and opportunity — the same values that shaped Major
            Unnikrishnan&apos;s own path from a Bengaluru classroom to the Ashoka Chakra.
          </p>
        </RevealOnScroll>

        <div className="mst-grid4">
          {PILLARS.map((p) => (
            <RevealOnScroll key={p.title} className="mst-pillar">
              <Icon name={p.icon} style={{ width: 26, height: 26, color: "var(--c-olive)", marginBottom: 18 }} />
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
