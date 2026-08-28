import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const productAreas = [
  ["01", "Cleanroom systems", "Controlled-environment equipment for pharma, biotech and laboratories."],
  ["02", "Conveyor solutions", "Purpose-built material handling for efficient, reliable production lines."],
  ["03", "SS fabrication", "Hygienic cabinets, furniture and made-to-order stainless-steel assemblies."],
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span />Precision engineering since day one</p>
              <h1>Built for industries that demand <em>precision.</em></h1>
              <p className="hero-lead">From cleanroom equipment to conveyor systems and custom stainless-steel fabrication, SEI turns complex requirements into dependable engineering solutions.</p>
              <div className="hero-actions">
                <Link className="button" href="/products">Explore products <span>↗</span></Link>
                <Link className="text-link" href="/contact">Discuss your requirement <span>→</span></Link>
              </div>
              <div className="trust-row" aria-label="Industries served">
                <span>Pharmaceutical</span><i /><span>Food processing</span><i /><span>Healthcare</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="SEI engineering catalogue showcase">
              <div className="hero-photo-wrap"><img src="/products-conveyors.jpeg" alt="SEI conveyor and stainless-steel product catalogue" /></div>
              <div className="hero-badge"><strong>360°</strong><span>Design to delivery</span></div>
              <div className="hero-caption"><span>Engineered in India</span><strong>Built for demanding environments</strong></div>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="eyebrow"><span />What we build</p><h2>Engineering that keeps<br />your operation moving.</h2></div>
              <p>We design and manufacture practical, durable systems for controlled environments, process plants and production floors.</p>
            </div>
            <div className="product-strip">
              {productAreas.map(([number, title, description]) => (
                <article key={title}>
                  <span className="card-number">{number}</span><h3>{title}</h3><p>{description}</p>
                  <Link href="/products" aria-label={`Learn more about ${title}`}>Learn more <span>↗</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="shell stats-grid">
            <div><strong>04</strong><span>Core capabilities</span></div>
            <div><strong>05</strong><span>Industries served</span></div>
            <div><strong>01</strong><span>Accountable partner</span></div>
            <p>Every project is shaped around your process, your space and your performance requirements.</p>
          </div>
        </section>

        <section className="process-section">
          <div className="shell process-grid">
            <div className="process-copy">
              <p className="eyebrow"><span />How we work</p>
              <h2>One team, from first sketch to final installation.</h2>
              <p>Our engineers stay close to the brief—from understanding the workflow and material needs to fabrication, quality checks and project support.</p>
              <Link className="text-link" href="/about">Meet SEI <span>→</span></Link>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><strong>Understand</strong><p>We study your process, constraints and compliance needs.</p></div></li>
              <li><span>02</span><div><strong>Engineer</strong><p>We translate the brief into a practical, build-ready solution.</p></div></li>
              <li><span>03</span><div><strong>Manufacture</strong><p>We fabricate, assemble and inspect every critical detail.</p></div></li>
              <li><span>04</span><div><strong>Deliver</strong><p>We coordinate installation and remain available after handover.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="cta-panel-section">
          <div className="shell cta-panel">
            <div><p className="eyebrow light"><span />Your next project</p><h2>Need a solution built around your process?</h2></div>
            <Link className="button button-light" href="/contact">Start a conversation <span>↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
