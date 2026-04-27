import hero from "@/assets/hero.jpg";

export const Hero = () => (
  <section id="home" className="relative h-screen w-full overflow-hidden">
    <img
      src={hero}
      alt="VELOR editorial — model in minimal luxury streetwear"
      className="absolute inset-0 w-full h-full object-cover scale-105"
      width={1600}
      height={1024}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

    <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32 text-primary-foreground">
      <span className="text-xs tracking-[0.4em] uppercase mb-6 opacity-80 reveal in">FW / 26 Collection</span>
      <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl reveal in">
        Redefine Your<br /><span className="font-bold italic">Everyday</span> Style.
      </h1>
      <p className="mt-6 max-w-md text-base md:text-lg opacity-85 font-light reveal in">
        Considered essentials engineered for those who move with intention.
      </p>

      <div className="mt-10 flex flex-wrap gap-4 reveal in">
        <a href="#shop" className="group relative overflow-hidden bg-primary-foreground text-primary px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold transition-all hover:bg-accent">
          <span className="relative z-10">Shop Now</span>
        </a>
        <a href="#new" className="border border-primary-foreground/70 text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-primary-foreground hover:text-primary transition-all">
          Explore Collection
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/80">
      <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      <div className="w-px h-10 bg-primary-foreground/30 relative overflow-hidden">
        <span className="block w-px h-3 bg-primary-foreground absolute top-0 scroll-dot" />
      </div>
    </div>
  </section>
);
