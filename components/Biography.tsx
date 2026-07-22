"use client";

import { useEffect, useState } from "react";
import { JourneyMap } from "./JourneyMap";
import { NationalEmblem } from "./NationalEmblem";

const TABS = [
  { id: "p1", yr: "1977–1995", label: "Early Life & Calling" },
  { id: "p2", yr: "1995–2007", label: "Military Career & Excellence" },
  { id: "p3", yr: "2007–2008", label: "The Elite NSG Deployment" },
  { id: "p4", yr: "26–28 Nov 2008", label: "Operation Black Tornado" },
];

export function Biography() {
  const [active, setActive] = useState("p1");

  useEffect(() => {
    const jumpToTornado = () => {
      if (window.location.hash === "#black-tornado") setActive("p4");
    };
    jumpToTornado();
    window.addEventListener("hashchange", jumpToTornado);
    return () => window.removeEventListener("hashchange", jumpToTornado);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((cur) => {
        const idx = TABS.findIndex((t) => t.id === cur);
        return TABS[(idx + 1) % TABS.length].id;
      });
    }, 25000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section className="mst-section mst-section-flush-top" id="biography">
      <div className="mst-wrap">
        <div className="mst-section-head">
          <div>
            <p className="mst-eyebrow">The Life</p>
            <h2 className="mst-h2" style={{ marginTop: 12 }}>
              Thirty-one years, entirely in service
            </h2>
          </div>
          <p className="mst-lede">
            From a schoolboy in Bengaluru who wanted nothing but a uniform, to the officer who
            stood between four terrorists and a hotel full of hostages.
          </p>
        </div>

        <div id="black-tornado" style={{ scrollMarginTop: 84 }} />

        <div className="mst-tabs" role="tablist" aria-label="Biography timeline">
          {TABS.map((t) => (
            <button
              key={t.id}
              className="mst-tab"
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
            >
              <span className="yr">{t.yr}</span>
              <span className="lbl">{t.label}</span>
            </button>
          ))}
        </div>

        {active === "p1" && (
          <div className="mst-ledger" style={{ paddingTop: 40 }}>
            <dt>Kozhikode &amp; Bengaluru</dt>
            <dd>
              Sandeep Unnikrishnan was born on <b>15 March 1977 in Kozhikode, Kerala</b>, into a
              Malayali family that had since moved to Bengaluru. He was the only son of retired{" "}
              <b>ISRO</b> officer <b>Shri K. Unnikrishnan</b> and <b>Smt Dhanalakshmi
              Unnikrishnan</b>. He studied at <b>The Frank Anthony Public School, Bengaluru</b>,
              graduating in <b>1995 in the ISC Science stream</b>. He wanted to join the armed
              forces from childhood — a conviction, formed far from any battlefield, that would
              define every choice that followed.
              <div className="mst-chiprow">
                <span className="mst-chip">Frank Anthony Public School</span>
                <span className="mst-chip">Bengaluru</span>
                <span className="mst-chip">ISC Science, 1995</span>
              </div>
            </dd>
          </div>
        )}

        {active === "p2" && (
          <div className="mst-ledger" style={{ paddingTop: 40 }}>
            <dt>NDA &middot; IMA &middot; 7 Bihar</dt>
            <dd>
              He joined the <b>National Defence Academy (NDA), Khadakwasla, Pune</b>, in 1995 —
              part of <b>Oscar Squadron (No. 4 Battalion)</b> and the <b>94th Course</b> — and
              completed a <b>Bachelor of Arts</b> degree there. At the{" "}
              <b>Indian Military Academy (IMA), Dehradun</b>, he was part of the{" "}
              <b>104th Regular Course</b>. On <b>12 June 1999</b> he graduated and was commissioned
              as Lieutenant into the <b>7th Battalion, Bihar Regiment (Infantry)</b>. During{" "}
              <b>Operation Vijay</b> that July, he was deployed at forward posts along the Line of
              Control with Pakistan. He was promoted <b>Captain on 12 June 2003</b> and{" "}
              <b>Major on 13 June 2005</b>. At the <b>Ghatak Course</b>, held at the Infantry Wing
              Commando School, Belgaum, he earned an &apos;Instructor&apos; grading. He was also
              trained at the <b>High Altitude Warfare School, Gulmarg</b>, and went on to serve in{" "}
              <b>Siachen, Jammu &amp; Kashmir, Gujarat</b> (during the 2002 Gujarat riots),{" "}
              <b>Hyderabad</b>, and <b>Rajasthan</b>.
              <div className="mst-chiprow">
                <span className="mst-chip">NDA 94th, Oscar Sqn</span>
                <span className="mst-chip">IMA 104th Regular Course</span>
                <span className="mst-chip">Op Vijay, 1999</span>
                <span className="mst-chip">Ghatak Course &middot; Instructor Grade</span>
              </div>
            </dd>
          </div>
        )}

        {active === "p3" && (
          <div className="mst-ledger" style={{ paddingTop: 40 }}>
            <dt>51 SAG, NSG</dt>
            <dd>
              After serving across several postings, Major Unnikrishnan was selected to join the{" "}
              <b>National Security Guard</b>. On completion of training, he was assigned, in{" "}
              <b>January 2007</b>, as <b>Training Officer</b> of the{" "}
              <b>51 Special Action Group (51 SAG)</b> — and went on to take part in several of the
              NSG&apos;s operations.
              <div className="mst-chiprow">
                <span className="mst-chip">51 SAG</span>
                <span className="mst-chip">National Security Guard</span>
                <span className="mst-chip">Training Officer, Jan 2007</span>
              </div>
            </dd>
          </div>
        )}

        {active === "p4" && (
          <div className="mst-ledger" style={{ paddingTop: 40 }}>
            <dt>Taj Mahal Palace Hotel</dt>
            <dd>
              On the night of <b>26 November 2008</b>, terrorists from Pakistan attacked several
              buildings across South Mumbai, among them the iconic, century-old{" "}
              <b>Taj Mahal Palace Hotel</b>. Major Unnikrishnan, team commander of 51 SAG, entered
              the hotel with ten commandos and reached the sixth floor by the staircase, clearing
              hostages from the sixth and fifth floors. As the team broke open a locked fourth-floor
              room where terrorists were suspected, gunfire hit commando{" "}
              <b>Sunil Kumar Yadav</b> in both legs; Major Unnikrishnan saved and evacuated him,
              though the terrorists escaped after blasting a grenade inside. The team went on
              evacuating hostages for around fifteen hours.
              <br /><br />
              Around midnight on <b>27 November</b>, the team took the hotel&apos;s central
              staircase — their only route to the remaining hostages and terrorists — and was
              ambushed from the first floor. Commando <b>Sunil Kumar Jodha</b>, 27, was hit by
              seven bullets. Major Unnikrishnan arranged his evacuation, continued the firefight,
              then went after the fleeing terrorists alone, cornering all four in the hotel&apos;s
              Ballroom at its northern end single-handedly — and was fatally wounded in the
              encounter in the early hours of <b>28 November 2008</b>. His last words, by NSG
              accounts, were: &ldquo;Don&apos;t come up, I will handle them.&rdquo; NSG commandos
              later killed all four terrorists, trapped in the Ballroom and the Wasabi restaurant.
              <div className="mst-chiprow">
                <span className="mst-chip">Taj Mahal Palace Hotel</span>
                <span className="mst-chip">Saved Cdo. Sunil Kumar Yadav</span>
                <span className="mst-chip">14 hostages rescued</span>
              </div>
              <div className="mst-emblem-badge" style={{ marginTop: 20 }}>
                <NationalEmblem size={26} className="cap" />
                <span className="txt">
                  On <b>26 January 2009</b>, the Republic of India conferred upon him the{" "}
                  <b>Ashoka Chakra</b> — the nation&apos;s highest peacetime gallantry award —
                  posthumously.
                </span>
              </div>
              <blockquote className="mst-quote" style={{ marginTop: 24 }}>
                <p>
                  &ldquo;Major Sandeep Unnikrishnan led the commando operation launched on 27th
                  November 2008 to flush out terrorists from Hotel Taj Mahal, Mumbai in which he
                  rescued 14 hostages. During the operation, his team came under intense hostile
                  fire, in which one of his team members got grievously injured. Major Sandeep
                  pinned down the terrorists with accurate fire and rescued the injured commando to
                  safety. In the process, he was shot in his right arm. Despite his injuries, he
                  continued to fight the terrorists till his last breath. Major Sandeep
                  Unnikrishnan displayed most conspicuous bravery besides camaraderie and
                  leadership of the highest order and made the supreme sacrifice for the
                  nation.&rdquo;
                </p>
                <footer>Ashoka Chakra Citation &middot; IC-58660 Major Sandeep Unnikrishnan, Bihar Regiment / 51 Special Action Group (Posthumous)</footer>
              </blockquote>
            </dd>
          </div>
        )}

        <JourneyMap />
      </div>
    </section>
  );
}
