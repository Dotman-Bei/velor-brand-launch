import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "Shop", id: "shop" },
  { label: "New Arrivals", id: "new" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border text-foreground"
          : "bg-transparent text-primary-foreground"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button onClick={() => handleClick("home")} className="font-display font-bold tracking-[0.3em] text-lg">
          VELOR
        </button>

        <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider uppercase">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className="relative hover:opacity-70 transition-opacity after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className="relative hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full grid place-items-center">2</span>
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background text-foreground animate-fade-in">
          <ul className="flex flex-col py-6 px-6 gap-5 text-sm uppercase tracking-wider">
            {links.map((l) => (
              <li key={l.id}>
                <button onClick={() => handleClick(l.id)} className="w-full text-left">{l.label}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
