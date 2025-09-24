import CompassLogo from "@/components/CompassLogo";

const sizes = [24, 32, 40, 48, 64, 80, 100];
const backgrounds = [
  { name: 'Plain White', className: 'bg-white', border: true },
  { name: 'Light Sage', className: 'bg-resolve-sage/30', border: true },
  { name: 'Forest', className: 'bg-resolve-forest', border: false, invert: true },
  { name: 'Forest Dark', className: 'bg-resolve-forest-dark', border: false, invert: true },
  { name: 'Compass Accent', className: 'bg-resolve-compass', border: false, invert: true },
  { name: 'Neutral Gray', className: 'bg-gray-200', border: true },
  { name: 'Near Black', className: 'bg-neutral-900', border: false, invert: true },
];

export const metadata = {
  title: 'Logo Preview',
  description: 'Visual exploration of the Compass logo across sizes and backgrounds.'
};

export default function LogoPreviewPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Logo Preview</h1>
        <p className="text-muted-foreground max-w-2xl">Assess sizing, contrast, and clarity of the Compass identity mark across common UI contexts. Dark backgrounds apply inverted treatment simulation via a subtle ring.</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-end gap-8 p-6 rounded-lg bg-white shadow-sm border">
          {sizes.map(size => (
            <div key={size} className="flex flex-col items-center gap-2">
              <CompassLogo size={size} />
              <span className="text-xs text-muted-foreground">{size}px</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Background Contrast</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {backgrounds.map(bg => (
            <div key={bg.name} className="space-y-3">
              <h3 className="text-sm font-medium tracking-wide text-foreground/70 uppercase">{bg.name}</h3>
              <div className={`relative rounded-xl p-6 flex items-center justify-center aspect-square ${bg.className} ${bg.border ? 'border' : ''}`}>
                <CompassLogo size={72} className={bg.invert ? 'drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]' : ''} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Usage Recommendations</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
          <li>Primary navigation: 48px (current) provides strong presence without overpowering typography.</li>
          <li>Mobile header: consider 40px for tighter vertical space.</li>
          <li>Favicon / tab: export simplified 32px and 16px variants (remove cardinal letters for smallest sizes if needed).</li>
          <li>On dark backgrounds: apply a soft white outer glow or thin light ring to maintain edge clarity.</li>
          <li>Avoid placing over busy photography without a neutral buffer (solid or 20–30% translucent panel).</li>
        </ul>
      </section>

      <footer className="pt-8 border-t text-xs text-muted-foreground">
        Visual reference only — adjust final production assets in the design system if color tokens evolve.
      </footer>
    </main>
  );
}
