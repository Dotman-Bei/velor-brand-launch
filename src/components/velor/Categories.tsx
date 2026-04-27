import men from "@/assets/cat-men.jpg";
import women from "@/assets/cat-women.jpg";
import acc from "@/assets/cat-acc.jpg";
import { Reveal } from "./Reveal";

const cats = [
  { title: "Men", img: men, count: "84 pieces" },
  { title: "Women", img: women, count: "96 pieces" },
  { title: "Accessories", img: acc, count: "42 pieces" },
];

export const Categories = () => (
  <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
    <Reveal>
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">01 — Categories</span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-3">Shop by category</h2>
        </div>
        <a href="#shop" className="hidden md:block text-xs tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition">View All</a>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {cats.map((c, i) => (
        <Reveal key={c.title} delay={i * 120}>
          <a href="#shop" className="group block relative overflow-hidden aspect-[3/4] bg-muted">
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-80">{c.count}</span>
              <h3 className="font-display text-3xl md:text-4xl font-medium mt-1 flex items-center gap-3">
                {c.title}
                <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
              </h3>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);
