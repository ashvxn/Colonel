import Image from "next/image";
import { AshokaChakra } from "./AshokaChakra";
import { HeroPhoto } from "./HeroPhoto";
import { Icon } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

export function Hero() {
  return (
    <section className="mst-hero">
      <HeroPhoto />

      <div className="mst-wrap mst-hero-body">
        <div className="mst-hero-grid">
          <div>
            <div className="mst-hero-badge">
              <AshokaChakra size={16} spin title="" />
              Ashoka Chakra (Posthumous)&nbsp;&middot;&nbsp;26 Jan 2009
            </div>
            <h1>
              In service, <em>fearless.</em>
              <br />
              In sacrifice, <em>eternal.</em>
            </h1>
            <p className="mst-lede" style={{ marginTop: 20, fontSize: "1.1rem" }}>
              The <b>Major Sandeep Unnikrishnan Ashok Chakra Foundation</b> is a charitable
              trust raised in his name — team commander of the 51 Special Action Group, National
              Security Guard, who gave his life defending hostages inside the Taj Mahal Palace
              Hotel, Mumbai, in the early hours of 28 November 2008.
            </p>
            <blockquote className="mst-quote">
              <p>&ldquo;Don&apos;t come up, I will handle them.&rdquo;</p>
              <footer>Major Sandeep Unnikrishnan &middot; Final radio transmission, Operation Black Tornado</footer>
            </blockquote>
            <div className="mst-hero-ctas">
              <a href="#biography" className="mst-btn">
                Explore The Legacy <Icon name="arrow" />
              </a>
              <a href="#contact" className="mst-btn mst-btn-solid">
                Support The Trust <Icon name="heart" style={{ stroke: "#1a0f00", width: 16, height: 16 }} />
              </a>
            </div>
          </div>

          <RevealOnScroll>
            <aside className="mst-dossier">
              <Image
                src="/images/logo.jpg"
                alt="Official seal of the Major Sandeep Unnikrishnan Ashok Chakra Foundation"
                width={72}
                height={72}
                className="mst-dossier-stamp"
              />
              <div className="mst-mono-tag" style={{ marginBottom: 14 }}>
                Service Record &middot; Extract
              </div>
              <dl>
                <div className="mst-dossier-row"><dt>Born</dt><dd>15 Mar 1977, Kozhikode</dd></div>
                <div className="mst-dossier-row"><dt>Commissioned</dt><dd>12 Jun 1999</dd></div>
                <div className="mst-dossier-row"><dt>Regiment</dt><dd>7 Bihar</dd></div>
                <div className="mst-dossier-row"><dt>Special Unit</dt><dd>51 SAG, NSG</dd></div>
                <div className="mst-dossier-row"><dt>Operation</dt><dd>Black Tornado</dd></div>
                <div className="mst-dossier-row"><dt>Fell</dt><dd>28 Nov 2008</dd></div>
                <div className="mst-dossier-row"><dt>Honour</dt><dd style={{ color: "var(--c-saffron-ink)" }}>Ashoka Chakra</dd></div>
              </dl>
            </aside>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
