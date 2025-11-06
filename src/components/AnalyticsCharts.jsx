import React from 'react';
import { LineChart, BarChart3 } from 'lucide-react';

function Sparkline({ values = [], color = 'text-blue-400' }) {
  const max = Math.max(...values, 1);
  const points = values
    .map((v, i) => `${(i / (values.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(' ');
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-16">
      <polyline fill="none" strokeWidth="3" className={color} points={points} />
    </svg>
  );
}

export default function AnalyticsCharts() {
  const revenue = [12, 14, 13, 16, 18, 24, 21, 26, 30, 28, 35, 40];
  const orders = [20, 18, 22, 25, 24, 26, 29, 31, 34, 36, 38, 42];

  return (
    <section className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-medium flex items-center gap-2">
            <LineChart className="w-5 h-5" /> Revenue (last 12 mo)
          </h3>
          <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">+18%</span>
        </div>
        <Sparkline values={revenue} color="stroke-blue-400" />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-medium flex items-center gap-2">
            <BarChart3 className="w-5 h-5" /> Orders (last 12 mo)
          </h3>
          <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">+9%</span>
        </div>
        <Sparkline values={orders} color="stroke-indigo-400" />
      </div>
    </section>
  );
}
