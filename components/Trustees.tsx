import { Icon } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

const TRUSTEES = [
  {
    initials: "SD",
    name: "Colonel S. Dinny",
    role: "[Role / Designation]",
    bio: "[Unit / Regiment — Years of Service — background to be added.]",
  },
  {
    initials: "AM",
    name: "Anjali Menon",
    role: "Executive Trustee",
    bio: "Philanthropist and social worker with 15 years leading education and welfare initiatives for defense families across South India.",
  },
  {
    initials: "SD",
    name: "S. Deshpande, CA",
    role: "Treasurer & Legal Trustee",
    bio: "Chartered accountant and legal advisor overseeing compliance, 80G/12A filings, and financial transparency for the Trust.",
  },
  {
    initials: "VK",
    name: "Vice Admiral V. Kamath (Retd.)",
    role: "Patron & Advisor",
    bio: "Distinguished veteran and civic leader providing strategic guidance and defense-community outreach for the Trust's programs.",
  },
];

// DEV NOTE: Trustee data above is illustrative placeholder content, except
// Colonel S. Dinny's name, which is confirmed. His role/bio and all other
// entries still need verified records before launch.
export function Trustees() {
  return (
    <section className="mst-section" id="trustees">
      <div className="mst-wrap">
        <div className="mst-section-head">
          <div>
            <p className="mst-eyebrow">Governance</p>
            <h2 className="mst-h2" style={{ marginTop: 12 }}>Board of Trustees</h2>
          </div>
          <p className="mst-lede">
            Placeholder profiles — to be replaced with verified trustee credentials,
            photographs, and registration-linked bios ahead of public launch.
          </p>
        </div>

        <div className="mst-grid-trustee">
          {TRUSTEES.map((t, i) => (
            <RevealOnScroll key={t.name} className="mst-card mst-trustee" delay={i * 0.08}>
              <span className="cnr tl" />
              <span className="cnr br" />
              <div className="mst-avatar">{t.initials}</div>
              <h3>{t.name}</h3>
              <p className="mst-trustee-role">{t.role}</p>
              <p>{t.bio}</p>
              <a className="mst-trustee-link" href="#">
                Full Profile <Icon name="arrow" style={{ width: 12, height: 12 }} />
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
