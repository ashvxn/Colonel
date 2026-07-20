import { Icon } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

const TRUSTEES = [
  {
    initials: "RV",
    name: "Col. R. Venkataraman (Retd.)",
    role: "Managing Trustee & Chairman",
    bio: "Served 28 years in the Indian Army, including a tenure alongside NSG operations command. Represents the Unnikrishnan family on the founding board.",
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

// DEV NOTE: Trustee data above is illustrative placeholder content.
// Replace name, role, bio and the "Full Profile" href with verified records before launch.
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
          {TRUSTEES.map((t) => (
            <RevealOnScroll key={t.initials} className="mst-card mst-trustee">
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
