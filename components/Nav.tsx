"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

const LINKS = [
  { href: "#biography", label: "Biography" },
  { href: "#black-tornado", label: "Op. Black Tornado" },
  { href: "#trust", label: "The Trust" },
  { href: "#trustees", label: "Trustees" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#contact", label: "Contact Us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="mst-nav">
        <div className="mst-wrap mst-nav-inner">
          <a href="#top" className="mst-brand">
            <Image src="/images/logo.jpg" alt="" width={34} height={34} className="mst-brand-seal" />
            <span className="mst-brand-word">
              Major Sandeep Unnikrishnan
              <b>Ashok Chakra Foundation</b>
            </span>
          </a>
          <nav aria-label="Primary">
            <ul className="mst-navlinks">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mst-nav-right">
            <button
              type="button"
              className="mst-iconbtn mst-burger"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mst-drawer"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" className="mst-icon" style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>
        <div className="mst-ribbon">
          <span className="s1" />
          <span className="s2" />
          <span className="s3" />
        </div>
      </header>

      {/* Rendered as a sibling of <header>, not a child — .mst-nav uses
          backdrop-filter, which (like transform) creates a new containing
          block for position:fixed descendants. Nesting the drawer inside it
          made inset:0 resolve against the navbar's own box instead of the
          viewport, collapsing it to a thin scrollable strip. */}
      <div id="mst-drawer" className={`mst-drawer ${open ? "open" : ""}`}>
        <div className="mst-drawer-top">
          <span className="mst-brand-word">
            Major Sandeep Unnikrishnan
            <b>Ashok Chakra Foundation</b>
          </span>
          <button type="button" className="mst-iconbtn" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Icon name="close" className="mst-icon" style={{ width: 18, height: 18 }} />
          </button>
        </div>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mst-btn mst-btn-solid"
          style={{ justifyContent: "center" }}
          onClick={() => setOpen(false)}
        >
          <Icon name="heart" style={{ stroke: "#1a0f00", width: 16, height: 16 }} /> Support The Foundation
        </a>
      </div>
    </>
  );
}
