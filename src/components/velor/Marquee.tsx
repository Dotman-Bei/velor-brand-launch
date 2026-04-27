const phrases = ["Free Shipping Over $200", "★", "New FW/26 Collection", "★", "Limited Production Runs", "★", "Worldwide Delivery", "★"];

export const Marquee = () => (
  <div className="bg-primary text-primary-foreground overflow-hidden border-y border-border">
    <div className="marquee whitespace-nowrap py-4 flex">
      {[...Array(2)].map((_, k) => (
        <div key={k} className="flex shrink-0">
          {phrases.concat(phrases).map((p, i) => (
            <span key={i} className="px-8 text-xs tracking-[0.4em] uppercase font-medium">{p}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
