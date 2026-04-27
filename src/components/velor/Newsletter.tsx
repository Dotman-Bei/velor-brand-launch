import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Welcome to VELOR. Check your inbox.");
    setEmail("");
  };
  return (
    <section className="bg-secondary py-24 md:py-32 px-6 md:px-10">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">04 — Newsletter</span>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-3">Join the VELOR community</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Early drops, private archives, and a 10% welcome offer.
          </p>
          <form onSubmit={submit} className="mt-10 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-background border border-border px-5 py-4 text-sm focus:outline-none focus:border-foreground transition"
            />
            <button className="bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};
