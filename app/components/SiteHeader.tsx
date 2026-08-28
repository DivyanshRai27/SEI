import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Contact", "/contact"],
] as const;

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="SEI home">
      <span className="brand-mark" aria-hidden="true">S</span>
      <span className="brand-type">
        <strong>SEI</strong>
        <small>Supertech Engineering (India)</small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-small desktop-quote" href="/contact">Get a quote</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
