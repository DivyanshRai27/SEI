import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Products", description: "Explore SEI cleanroom equipment, conveyor systems, stainless-steel fabrication and custom machinery parts." };

const groups = [
  {
    number:"01", title:"Cleanroom equipment", image:"/products-cleanroom.jpeg",
    description:"Contamination-control equipment engineered for controlled transfer, personnel safety and reliable cleanroom workflows.",
    items:["Static & dynamic pass boxes","Sampling & dispensing booths","Horizontal & vertical laminar air flow","Air showers & mist showers","De-dusting booths & tunnels","Biosafety & garment storage cabinets"]
  },
  {
    number:"02", title:"Conveyor systems", image:"/products-conveyors.jpeg",
    description:"Custom material-handling systems designed around product type, line speed, available space and production flow.",
    items:["Modular belt conveyors","Slat chain conveyors","Roller & inspection conveyors","Incline and curved conveyors","Packing line conveyors","Custom-built conveyor assemblies"]
  },
  {
    number:"03", title:"Stainless-steel fabrication", image:"/products-storage.jpeg",
    description:"Hygienic, durable fabrication for pharmaceutical, food, healthcare and industrial use—made in SS304, SS316 and SS316L.",
    items:["SS cabinets & storage units","IPC containers & process tanks","Pharmaceutical furniture","Canteen & food equipment","Bottling plant machinery parts","Made-to-drawing assemblies"]
  }
] as const;

export default function ProductsPage(){
  return <>
    <SiteHeader />
    <main>
      <section className="page-hero products-hero"><div className="shell page-hero-grid"><div><p className="eyebrow"><span />Products & capabilities</p><h1>Made to perform.<br /><em>Built to fit.</em></h1></div><p>Explore our core manufacturing capabilities. Most SEI products can be adapted to your dimensions, materials, process and control requirements.</p></div></section>
      <section className="product-groups"><div className="shell">
        {groups.map((group,index)=><article className="product-group" key={group.title}>
          <div className="catalog-frame"><img src={group.image} alt={`${group.title} catalogue examples`} /></div>
          <div className="product-group-copy"><span className="card-number">{group.number}</span><h2>{group.title}</h2><p>{group.description}</p><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul><Link className="text-link" href="/contact">Request details <span>→</span></Link></div>
        </article>)}
      </div></section>
      <section className="custom-section"><div className="shell custom-grid"><div><p className="eyebrow light"><span />Custom manufacturing</p><h2>If it needs to fit your line, we can engineer it.</h2></div><div><p>Share a drawing, sample, target dimension or operating problem. Our team can help turn it into a practical stainless-steel or mechanical assembly.</p><Link className="button button-light" href="/contact">Discuss a custom requirement <span>↗</span></Link></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
