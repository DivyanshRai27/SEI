import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "About", description: "Learn about SEI's approach to custom engineering, cleanroom equipment, conveyors and stainless-steel fabrication." };

const values = [
  ["01", "Precision", "We engineer around real operating conditions and pay close attention to every interface, finish and dimension."],
  ["02", "Practicality", "Our solutions are made to work hard, clean easily and integrate smoothly with the way your teams operate."],
  ["03", "Partnership", "We stay accountable from early discussion through manufacturing, delivery and after-project support."],
] as const;

export default function AboutPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><p className="eyebrow"><span />About SEI</p><h1>Engineering with purpose.<br /><em>Built on trust.</em></h1></div>
          <p>Supertech Engineering (India) designs and manufactures equipment for controlled environments and process-led industries from Baddi, Himachal Pradesh.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="shell story-grid">
          <div className="story-visual"><img src="/catalog-cover.jpeg" alt="SEI cleanroom engineering catalogue" /></div>
          <div className="story-copy">
            <p className="eyebrow"><span />Who we are</p>
            <h2>A manufacturing partner for complex industrial needs.</h2>
            <p>SEI works across cleanroom equipment, conveyor systems, machinery parts for bottling plants, pharmaceutical and food-processing equipment, and custom stainless-steel fabrication.</p>
            <p>Our work begins with the application. We listen to the operating requirement, understand the environment, and develop equipment that is functional, serviceable and made for long-term use.</p>
            <div className="mini-facts"><div><strong>Made in India</strong><span>Manufacturing base in Baddi</span></div><div><strong>Custom-first</strong><span>Solutions shaped to your workflow</span></div></div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="shell">
          <div className="split-heading"><div><p className="eyebrow"><span />What guides us</p><h2>Good engineering is clear,<br />considered and dependable.</h2></div><p>We bring a hands-on manufacturing mindset to every project—focused on the details that make equipment safer, cleaner and easier to use.</p></div>
          <div className="values-grid">{values.map(([n,t,d])=><article key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="industries-section">
        <div className="shell industries-grid"><div><p className="eyebrow light"><span />Industries</p><h2>Experience across demanding environments.</h2></div><div className="industry-list"><span>Pharmaceuticals</span><span>Biotech</span><span>Healthcare</span><span>Laboratories</span><span>Food processing</span><span>Semi-conductor units</span></div></div>
      </section>

      <section className="cta-panel-section"><div className="shell cta-panel"><div><p className="eyebrow light"><span />Work with us</p><h2>Let&apos;s engineer the right solution together.</h2></div><Link className="button button-light" href="/contact">Talk to our team <span>↗</span></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
