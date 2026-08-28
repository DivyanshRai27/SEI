import Link from "next/link";
import { Brand } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Brand />
          <p>Precision-built cleanroom equipment, conveyors and stainless-steel fabrication for industries where quality cannot be compromised.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/about">About us</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Request a quote</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+919876602490">+91 9876-602-490</a>
          <a href="mailto:sales@superenggindia.com">sales@superenggindia.com</a>
          <span>Baddi, Himachal Pradesh</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Supertech Engineering (India)</span>
        <span>Engineered with purpose. Built to perform.</span>
      </div>
    </footer>
  );
}
