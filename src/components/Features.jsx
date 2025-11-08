import { KeyRound, ShieldCheck, Activity, Wallet } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-emerald-400" />
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Features() {
  const items = [
    {
      icon: KeyRound,
      title: 'Key Management',
      desc: 'Generate, rotate, and shard keys with HSM-backed security and full audit trails.'
    },
    {
      icon: Wallet,
      title: 'Wallet Orchestration',
      desc: 'Spin up programmable wallets across chains with policy-based approvals.'
    },
    {
      icon: Activity,
      title: 'Risk Analytics',
      desc: 'Real-time monitoring, anomaly detection, and sanctioned entity screening.'
    },
    {
      icon: ShieldCheck,
      title: 'Compliance-Ready',
      desc: 'SOC 2 Type II, GDPR, and chain-specific compliance integrations.'
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#070a0d] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for crypto-native teams</h2>
          <p className="mt-3 text-gray-400">Everything you need to securely build, launch, and scale crypto products.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <Feature key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
