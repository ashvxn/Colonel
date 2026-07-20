import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mst-footer">
      <div className="mst-wrap">
        <div className="mst-footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Image src="/images/logo.jpg" alt="" width={30} height={30} className="mst-brand-seal" />
              <span style={{ fontFamily: "var(--f-display)", fontSize: "1.05rem", color: "#f2efe4" }}>
                Major Sandeep Unnikrishnan Ashok Chakra Memorial Foundation
              </span>
            </div>
            <p style={{ fontSize: ".87rem", color: "#8f9788", maxWidth: 340 }}>
              A public charitable trust honouring Major Sandeep Unnikrishnan, AC, and supporting
              the families and communities that carry his legacy forward.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#biography">Biography</a></li>
              <li><a href="#trust">The Trust</a></li>
              <li><a href="#trustees">Trustees</a></li>
              <li><a href="#initiatives">Initiatives</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Indiranagar, Bengaluru, KA</li>
              <li>office@sandeepunnikrishnanfoundation.org</li>
              <li>+91 80 XXXX XXXX</li>
            </ul>
          </div>
        </div>
        <div className="mst-footer-bottom">
          <span>&copy; {year} Major Sandeep Unnikrishnan Ashok Chakra Memorial Foundation. All rights reserved.</span>
          <span className="mst-jaihind">Jai Hind</span>
        </div>
        <p className="mst-credit">Website designed &amp; developed by Obsidyne</p>
      </div>
      <div className="mst-ribbon">
        <span className="s1" />
        <span className="s2" />
        <span className="s3" />
      </div>
    </footer>
  );
}
