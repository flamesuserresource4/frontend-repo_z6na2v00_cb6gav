import React from 'react';
import { User, ShoppingCart, Package, DollarSign } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend, color }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5 hover:bg-white/10 transition">
    <div className="flex items-center gap-3">
      <div className={`p-2.5 rounded-lg ${color} text-white`}> 
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xl md:text-2xl font-semibold text-white">{value}</p>
          {trend != null && (
            <span className="text-xs text-emerald-400">{trend > 0 ? `+${trend}%` : `${trend}%`} MoM</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function DashboardHeader() {
  const user = {
    name: 'Alex Johnson',
    email: 'alex@trndz.com',
  };

  return (
    <header className="w-full">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white">Welcome back, {user.name.split(' ')[0]}</h1>
            <p className="text-white/60 text-sm">Here is a quick overview of your store today</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={ShoppingCart} label="Purchases" value="1,284" trend={8.2} color="bg-blue-600/80" />
        <StatCard icon={Package} label="Products" value="142" trend={1.4} color="bg-indigo-600/80" />
        <StatCard icon={DollarSign} label="Revenue" value="$48,920" trend={5.1} color="bg-emerald-600/80" />
        <StatCard icon={User} label="Customers" value="3,876" trend={2.3} color="bg-purple-600/80" />
      </div>
    </header>
  );
}
