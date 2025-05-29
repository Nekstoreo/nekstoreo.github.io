import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground">
          Nestor Gutierrez
        </h1>
        <a
          href="https://github.com/Nekstoreo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-amber-500/80 hover:text-amber-500 transition-colors"
        >
          @Nekstoreo
        </a>
        <p className="text-2xl md:text-3xl italic text-foreground/80">
          Backend Developer / Reluctant Frontender
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/70">
          Crafting robust and scalable backend solutions with a touch of frontend
          finesse when duty calls.
        </p>
        <div className="pt-6">
          <Button
            variant="outline"
            size="lg"
            className="border-amber-500/50 text-amber-500/90 hover:bg-amber-500/10 hover:text-amber-500 hover:border-amber-500 transition-all duration-300 px-8 py-6 text-lg"
            // Added px-8 py-6 text-lg for a slightly larger button as per common hero CTA style
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
