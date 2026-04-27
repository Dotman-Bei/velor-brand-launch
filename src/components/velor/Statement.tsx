import statement from "@/assets/statement.jpg";
import { Reveal } from "./Reveal";

export const Statement = () => (
  <section id="about" className="py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <Reveal>
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img src={statement} alt="VELOR brand statement" loading="lazy" width={1200} height={1200}
               className="w-full h-full object-cover" />
        </div>
      </Reveal>
      <Reveal delay={150}>
        <div>
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">03 — The Brand</span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-3 leading-[1.05]">
            Designed for <span className="italic font-medium">movement.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
            VELOR is built on the belief that confidence is quiet. We engineer essentials in heavyweight cottons, brushed wools and supple leathers — pieces designed to be worn, lived in, and loved beyond the season.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            Made in limited runs. Shipped worldwide.
          </p>
          <a href="#contact" className="inline-block mt-10 border border-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-foreground hover:text-background transition-all">
            Learn More
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
