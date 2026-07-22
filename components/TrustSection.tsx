import Image from "next/image";
import { Icon } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

const PILLARS = [
  { icon: "shield", title: "Welfare of Defence Personnel", body: "Promoting welfare activities for members of the armed forces, ex-servicemen and their families, and providing assistance to families of martyrs and disabled soldiers." },
  { icon: "pulse", title: "Public Welfare", body: "Relief activities for the poor, destitute and underprivileged; medical relief including clinics, hospitals and health camps; and promotion of rural and skill development." },
  { icon: "book", title: "Educational Objects", body: "Scholarships, fellowships and educational assistance for students, particularly children of armed forces personnel, and support for schools, libraries and research institutions." },
  { icon: "users", title: "National Service & Patriotism", body: "Lectures, conferences and conclaves promoting awareness of constitutional duties, national service and patriotism among youth, and memorial events honouring national heroes." },
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

        <RevealOnScroll className="mst-card mst-vision-card" style={{ marginBottom: 40 }}>
          <span className="cnr tl" />
          <span className="cnr br" />
          <div className="mst-vision-grid">
            <div className="mst-vision-seal">
              <Image src="/images/logo.jpg" alt="Official seal of the Major Sandeep Unnikrishnan Ashok Chakra Foundation" width={148} height={148} />
              <p className="mst-vision-seal-caption">The Foundation&apos;s official seal</p>
            </div>
            <div>
              <p className="mst-mono-tag" style={{ marginBottom: 10 }}>Vision &amp; Mission</p>
              <p style={{ fontSize: "1.05rem", color: "var(--c-ink-soft)", maxWidth: 760 }}>
                The <b style={{ color: "var(--c-ink)" }}>Major Sandeep Unnikrishnan Ashok Chakra Foundation</b>{" "}
                was registered on 4 June 2026 as a charitable trust in Kollam, Kerala. It was formed
                with the aim of keeping alive the motto encircling its seal above —{" "}
                <b style={{ color: "var(--c-ink)" }}>&ldquo;Seva Parmo Dharma&rdquo;</b> (service is the
                highest duty) — displayed by one of India&apos;s finest soldiers, who laid down his
                life fighting for our nation. The Foundation is the initiative of three Indian Army
                officers: Major Unnikrishnan&apos;s course-mate, Colonel S. Dinny (Retd.); a
                regimental officer, Colonel Kochu Koshy Panicker, Shaurya Chakra (Retd.); and former
                Judge Advocate General, Major General (Dr) C. S. Nair, Vishisht Seva Medal (Retd.).
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mst-grid4">
          {PILLARS.map((p, i) => (
            <RevealOnScroll key={p.title} className="mst-pillar" delay={i * 0.08}>
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
