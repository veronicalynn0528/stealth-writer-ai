"use client";

export default function FeatureSection() {
  return (
    <section id="features" className="max-w-[1200px] mx-auto px-5 md:px-16 py-32 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5 space-y-8">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">The Nuance of Choice.</h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Our algorithms don't just swap words; they restructure syntax to mirror the rhythmic variance of human thought. Whether it's an academic paper or a creative blog post, the soul of your writing remains intact.
        </p>
        <ul className="space-y-4">
          <li className="flex items-baseline gap-4">
            <span className="w-2 h-2 bg-on-surface rounded-full"></span>
            <span className="font-label-md text-label-md uppercase tracking-wide">Dynamic Pacing Adjustment</span>
          </li>
          <li className="flex items-baseline gap-4">
            <span className="w-2 h-2 bg-on-surface rounded-full"></span>
            <span className="font-label-md text-label-md uppercase tracking-wide">Contextual Synonym Selection</span>
          </li>
          <li className="flex items-baseline gap-4">
            <span className="w-2 h-2 bg-on-surface rounded-full"></span>
            <span className="font-label-md text-label-md uppercase tracking-wide">Grammatical Integrity Lock</span>
          </li>
        </ul>
      </div>
      <div className="md:col-span-7 relative">
        <div className="aspect-[4/3] bg-surface-container border border-outline-variant p-8 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-surface-container-low to-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-outline/30">auto_fix_high</span>
          </div>
        </div>
        <div className="absolute -bottom-10 -left-10 bg-background border border-outline p-6 max-w-[240px] hidden md:block">
          <p className="font-caption text-caption italic text-on-surface-variant">
            "The best technology is the one you cannot see. Stealth Writer AI behaves like an invisible editor."
          </p>
          <p className="mt-4 font-label-md text-label-md uppercase tracking-widest text-on-surface">— Editorial Review</p>
        </div>
      </div>
    </section>
  );
}
