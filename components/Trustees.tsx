import Image from "next/image";
import { RevealOnScroll } from "./RevealOnScroll";

const TRUSTEES = [
  {
    photo: "/images/trustees/cs-nair.jpg",
    name: "Major General (Dr) C. S. Nair, Vishisht Seva Medal (Retd.)",
    role: "Trustee & President",
    bio: "Commissioned into the Indian Army in 1978, he served over 33 years in a military legal career culminating in his appointment as Judge Advocate General, superannuating in January 2012. He was later empanelled as Group 'A' counsel for the Central Government in the Supreme Court of India (2012–2014) and has practised in the High Court of Kerala, Cochin, since 2015. He was awarded the President's Vishisht Seva Medal in January 2011.",
  },
  {
    photo: "/images/trustees/s-dinny.jpg",
    name: "Colonel S. Dinny (Retd.)",
    role: "Managing Trustee & Secretary",
    bio: "A 104th Regular Course graduate of the Indian Military Academy, Dehradun, commissioned into 14 Rajput in June 1999 alongside his course-mate and close friend, Major Sandeep Unnikrishnan, Ashok Chakra. He served in the Kashmir valley, North East India, and along the Line of Actual Control in Ladakh, was a UN Military Observer in Congo, and commanded an infantry battalion at Pangong Tso, Ladakh, before taking voluntary retirement on 1 October 2019 to serve society in Kerala.",
  },
  {
    photo: "/images/trustees/kk-panicker.jpg",
    name: "Colonel Kochu Koshy Panicker, Shaurya Chakra (Retd.)",
    role: "Trustee & Treasurer",
    bio: "Born in Ezhukone, Kollam, Kerala, he joined the Indian Army in 1976 and was commissioned into the 10th Battalion, Bihar Regiment, in 1985. He was awarded the Shaurya Chakra for a daring counter-terrorism operation in Jammu & Kashmir in which he eliminated terrorists and was himself grievously injured. He served the Indian Army for 41 years, retiring in 2017.",
  },
];

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
            The Foundation is an initiative of three Indian Army officers, who together form its
            Board of Trustees.
          </p>
        </div>

        <div className="mst-grid-trustee">
          {TRUSTEES.map((t, i) => (
            <RevealOnScroll key={t.name} className="mst-card mst-trustee" delay={i * 0.08}>
              <span className="cnr tl" />
              <span className="cnr br" />
              <div className="mst-trustee-photo">
                <Image src={t.photo} alt={t.name} fill sizes="(min-width: 920px) 33vw, (min-width: 560px) 50vw, 100vw" style={{ objectFit: "cover" }} />
              </div>
              <h3>{t.name}</h3>
              <p className="mst-trustee-role">{t.role}</p>
              <p>{t.bio}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
