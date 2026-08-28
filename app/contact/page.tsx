import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Contact", description: "Contact Supertech Engineering (India) for cleanroom equipment, conveyors and custom manufacturing enquiries." };

export default function ContactPage(){
  return <>
    <SiteHeader />
    <main>
      <section className="contact-hero"><div className="shell contact-grid">
        <div className="contact-intro"><p className="eyebrow"><span />Contact SEI</p><h1>Let&apos;s build what your process <em>needs.</em></h1><p>Tell us what you are planning, improving or trying to solve. We&apos;ll help you identify the right equipment or fabrication approach.</p>
          <div className="contact-details">
            <div><span>Call</span><a href="tel:+919876602490">+91 9876-602-490</a><a href="tel:+917087902490">+91 7087-902-490</a></div>
            <div><span>Email</span><a href="mailto:sales@superenggindia.com">sales@superenggindia.com</a></div>
            <div><span>Visit</span><address>Near Omaxe Park Woods, Chakkan Road,<br />Village Chakkan, P.O. Kaurana, Baddi,<br />District Solan, Himachal Pradesh 173205</address></div>
          </div>
        </div>
        <div className="enquiry-card"><p className="form-kicker">Start an enquiry</p><h2>Share your requirement</h2>
          <form action="mailto:sales@superenggindia.com" method="post" encType="text/plain">
            <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
            <div className="form-row"><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label><label>Phone<input name="phone" type="tel" placeholder="+91" /></label></div>
            <label>Company<input name="company" type="text" placeholder="Company name" /></label>
            <label>What do you need?<select name="requirement" defaultValue=""><option value="" disabled>Select a product area</option><option>Cleanroom equipment</option><option>Conveyor system</option><option>SS fabrication</option><option>Mechanical parts</option><option>Other custom requirement</option></select></label>
            <label>Project details<textarea name="details" rows={5} required placeholder="Tell us about the application, dimensions or challenge..." /></label>
            <button className="button" type="submit">Prepare email enquiry <span>↗</span></button><small>Submitting opens your email app so you can review and send the message.</small>
          </form>
        </div>
      </div></section>
    </main>
    <SiteFooter />
  </>;
}
