import { Award, Globe, RotateCcw, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { Icon: Award, title: "Premium Quality", text: "Heavyweight fabrics built to last." },
  { Icon: Globe, title: "Worldwide Shipping", text: "Free on orders over $200." },
  { Icon: RotateCcw, title: "Easy Returns", text: "30-day no-questions returns." },
  { Icon: ShieldCheck, title: "Secure Payment", text: "Encrypted checkout, every order." },
];

export const Features = () => (
  <section className="border-y border-border py-16 md:py-20 px-6 md:px-10">
    <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
      {items.map(({ Icon, title, text }, i) => (
        <Reveal key={title} delay={i * 80}>
          <div className="flex flex-col items-start gap-4">
            <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
            <div>
              <h4 className="font-display font-semibold text-base tracking-wide">{title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
