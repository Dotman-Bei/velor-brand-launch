import { useState } from "react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import l1 from "@/assets/l1.jpg";
import l2 from "@/assets/l2.jpg";
import l3 from "@/assets/l3.jpg";
import l4 from "@/assets/l4.jpg";
import l5 from "@/assets/l5.jpg";
import l6 from "@/assets/l6.jpg";
import { Reveal } from "./Reveal";
import { ShoppingBag } from "lucide-react";

const products = [
  { name: "Onyx Heavyweight Hoodie", price: 180, img: p1, hover: l1, tag: "New" },
  { name: "Cream Ribbed Knit", price: 220, img: p2, hover: l2 },
  { name: "Tailored Wide Trousers", price: 195, img: p3, hover: l4 },
  { name: "Essential Cotton Tee", price: 65, img: p4, hover: l6, tag: "Best Seller" },
  { name: "Velor Wool Overcoat", price: 540, img: p5, hover: l3, tag: "New" },
  { name: "Sand Cargo Pant", price: 175, img: p6, hover: l5 },
  { name: "Minimalist Leather Sneaker", price: 260, img: p7, hover: l1 },
  { name: "Onyx Crossbody Bag", price: 290, img: p8, hover: l2 },
];

export const Products = () => (
  <section id="new" className="bg-secondary py-24 md:py-32">
    <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">02 — New Arrivals</span>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-3">The latest drops</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            Eight pieces. Fewer choices. Sharper silhouettes. Built to outlast the season.
          </p>
        </div>
      </Reveal>

      <div id="shop" className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 80}>
            <ProductCard {...p} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ProductCard = ({ name, price, img, hover, tag }: { name: string; price: number; img: string; hover: string; tag?: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="group bg-background hover-lift"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img src={img} alt={name} loading="lazy" width={800} height={1024}
             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? "opacity-0" : "opacity-100"}`} />
        <img src={hover} alt="" loading="lazy" width={800} height={1024}
             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? "opacity-100" : "opacity-0"}`} />
        {tag && (
          <span className="absolute top-3 left-3 bg-background text-foreground text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-semibold">
            {tag}
          </span>
        )}
        <button
          className={`absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3.5 text-[11px] tracking-[0.25em] uppercase font-semibold flex items-center justify-center gap-2 transition-transform duration-500 ${hovered ? "translate-y-0" : "translate-y-full"}`}
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
        </button>
      </div>
      <div className="p-4 md:p-5 flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium leading-snug">{name}</h3>
        <span className="text-sm font-semibold whitespace-nowrap">${price}</span>
      </div>
    </article>
  );
};
