import { ArrowRight, Check } from 'lucide-react';

export default function CTA() {
  const items = ['Free developer tier', 'No card required', 'Cancel anytime'];
  return (
    <section id="get-started" className="relative w-full bg-[#050709] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-40px,rgba(16,185,129,0.15),transparent)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Start building securely in minutes</h3>
              <p className="mt-3 text-gray-400">Create an org, connect chains, and ship your first transaction flow today.</p>
              <ul className="mt-6 grid gap-2 text-sm text-gray-300">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 transition-colors">
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-white/10 hover:border-white/20 text-white font-medium px-5 py-3 transition-colors">
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
