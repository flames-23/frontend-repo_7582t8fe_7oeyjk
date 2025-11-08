import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full bg-[#050709] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-emerald-300 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-medium tracking-wide">Zero-Trust Crypto Security</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              Secure, scale, and ship crypto apps with confidence
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl">
              APIs and tooling for key management, wallet orchestration, compliance, and real-time risk analytics — built for modern fintech teams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 transition-colors">
                Start Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#docs" className="inline-flex items-center rounded-md border border-white/10 hover:border-white/20 text-white font-medium px-5 py-3 transition-colors">
                Read Docs
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-gray-400">
              <div className="text-sm">SOC 2 Type II</div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-sm">EVM, Solana, Bitcoin</div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-sm">HSM-backed keys</div>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
