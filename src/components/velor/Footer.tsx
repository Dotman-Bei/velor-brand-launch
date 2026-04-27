import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8 px-6 md:px-10">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1">
          <div className="font-display font-bold tracking-[0.3em] text-xl">VELOR</div>
          <p className="mt-5 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
            Minimal luxury streetwear. Engineered essentials for those who move with intention.
          </p>
          <div className="flex gap-4 mt-6">
            {[Instagram, Twitter, Facebook, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="social"
                 className="w-9 h-9 grid place-items-center border border-primary-foreground/20 hover:bg-accent hover:border-accent hover:text-accent-foreground transition">
                <I className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Shop" links={["Men", "Women", "Accessories", "New Arrivals", "Sale"]} />
        <FooterCol title="Support" links={["Contact", "Shipping", "Returns", "Size Guide", "FAQ"]} />
        <FooterCol title="Company" links={["About", "Sustainability", "Careers", "Press", "Stockists"]} />
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© 2026 VELOR Studio. All rights reserved.</p>
        <p className="tracking-widest uppercase">Wear Confidence.</p>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-xs tracking-[0.3em] uppercase font-semibold mb-5">{title}</h4>
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l}>
          <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition">{l}</a>
        </li>
      ))}
    </ul>
  </div>
);
