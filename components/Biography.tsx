"use client";

import { useEffect, useState } from "react";
import { JourneyMap } from "./JourneyMap";
import { NationalEmblem } from "./NationalEmblem";

const TABS = [
  { id: "p1", yr: "1977–1995", label: "Early Life & Calling" },
  { id: "p2", yr: "1995–2007", label: "Military Career & Excellence" },
  { id: "p3", yr: "2007–2008", label: "The Elite NSG Deployment" },
  { id: "p4", yr: "26–29 Nov 2008", label: "Operation Black Tornado" },
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

  return (
    <section className="mst-section" id="biography">
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
              Sandeep Unnikrishnan was born on <b>15 March 1977 in Kozhikode, Kerala</b>, the son
              of retired ISRO officer <b>K. Unnikrishnan</b> and <b>Dhanalakshmi Unnikrishnan</b>.
              He was raised in Bengaluru and educated at <b>Frank Anthony Public School</b>, where
              classmates remember a boy who never wavered from a single ambition — to wear the
              uniform of the Indian Army. That childhood conviction, formed far from any
              battlefield, would define every choice that followed.
              <div className="mst-chiprow">
                <span className="mst-chip">Frank Anthony Public School</span>
                <span className="mst-chip">Bengaluru</span>
              </div>
            </dd>
          </div>
        )}

        {active === "p2" && (
          <div className="mst-ledger" style={{ paddingTop: 40 }}>
            <dt>NDA &middot; IMA &middot; 7 Bihar</dt>
            <dd>
              He entered the <b>National Defence Academy (94th Course, Oscar Squadron)</b> in
              1995, followed by the <b>Indian Military Academy (104th Course)</b>. On{" "}
              <b>12 July 1999</b> he was commissioned into the{" "}
              <b>7th Battalion, Bihar Regiment</b> — days into the guns of Kargil. He went
              straight into <b>Operation Vijay</b>, then on to the glacial outposts of{" "}
              <b>Siachen</b> and the valleys of <b>Jammu &amp; Kashmir</b>. At the punishing{" "}
              <b>Ghatak Commando Course in Belgaum</b>, he topped the course not once but twice,
              graded &apos;Instructor&apos; both times — a distinction few officers ever hold.
              <div className="mst-chiprow">
                <span className="mst-chip">NDA 94th, Oscar Sqn</span>
                <span className="mst-chip">IMA 104th</span>
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
              In <b>2007</b>, Major Unnikrishnan volunteered for India&apos;s most demanding
              counter-terrorism assignment, joining the <b>51 Special Action Group (51 SAG)</b> of
              the <b>National Security Guard</b> as a <b>Training Officer</b>. It placed him, by
              design, wherever the country&apos;s gravest hostage and terror situations would
              unfold next — a posting whose weight became clear within a year.
              <div className="mst-chiprow">
                <span className="mst-chip">51 SAG</span>
                <span className="mst-chip">National Security Guard</span>
                <span className="mst-chip">Training Officer</span>
              </div>
            </dd>
          </div>
        )}

        {active === "p4" && (
          <div className="mst-ledger" style={{ paddingTop: 40 }}>
            <dt>Taj Mahal Palace Hotel</dt>
            <dd>
              On <b>27 November 2008</b>, as terrorists held Mumbai under siege, Major
              Unnikrishnan led ten commandos into the <b>Taj Mahal Palace Hotel</b> to clear floor
              after floor and bring hostages out alive. When commando{" "}
              <b>Sunil Kumar Yadav</b> was hit and pinned in the open, Major Unnikrishnan carried
              him to safety under direct fire. Minutes later, on the hotel&apos;s upper floors, he
              moved ahead of his team to draw the terrorists&apos; attention, holding off{" "}
              <b>four armed attackers single-handedly</b> so the men behind him could advance. He
              was fatally wounded in the exchange in the early hours of{" "}
              <b>28 November 2008</b>, having ensured every soldier under his command survived
              the night.
              <div className="mst-chiprow">
                <span className="mst-chip">Taj Mahal Palace Hotel</span>
                <span className="mst-chip">Saved Cdo. Sunil Yadav</span>
              </div>
              <div className="mst-emblem-badge" style={{ marginTop: 20 }}>
                <NationalEmblem size={26} className="cap" />
                <span className="txt">
                  On <b>26 January 2009</b>, the Republic of India conferred upon him the{" "}
                  <b>Ashoka Chakra</b> — the nation&apos;s highest peacetime gallantry award —
                  posthumously.
                </span>
              </div>
            </dd>
          </div>
        )}

        <JourneyMap />
      </div>
    </section>
  );
}
