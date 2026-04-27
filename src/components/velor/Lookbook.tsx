import { Instagram } from "lucide-react";
import l1 from "@/assets/l1.jpg";
import l2 from "@/assets/l2.jpg";
import l3 from "@/assets/l3.jpg";
import l4 from "@/assets/l4.jpg";
import l5 from "@/assets/l5.jpg";
import l6 from "@/assets/l6.jpg";
import { Reveal } from "./Reveal";

const imgs = [l1, l2, l3, l4, l5, l6];

export const Lookbook = () => (
  <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
    <Reveal>
      <div className="text-center mb-12 md:mb-16">
        <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">05 — Lookbook</span>
        <h2 className="font-display text-4xl md:text-6xl font-light mt-3">@velor.studio</h2>
      </div>
    </Reveal>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
      {imgs.map((src, i) => (
        <Reveal key={i} delay={(i % 3) * 80}>
          <a href="#" className="group relative block aspect-square overflow-hidden bg-muted">
            <img src={src} alt={`Lookbook ${i + 1}`} loading="lazy" width={800} height={1024}
                 className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 grid place-items-center">
              <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1.5} />
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);
