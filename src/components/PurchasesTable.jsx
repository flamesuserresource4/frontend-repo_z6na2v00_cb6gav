import React from 'react';
import { CreditCard, Truck, CheckCircle2, Clock } from 'lucide-react';

const statusStyles = {
  Processing: 'text-amber-400 bg-amber-400/10',
  Shipped: 'text-blue-400 bg-blue-400/10',
  Delivered: 'text-emerald-400 bg-emerald-400/10',
};

const data = [
  { id: 'ORD-1024', customer: 'Jane Cooper', total: 129.5, method: 'Visa', status: 'Processing', date: '2025-11-02' },
  { id: 'ORD-1025', customer: 'Robert Fox', total: 249.0, method: 'Mastercard', status: 'Shipped', date: '2025-11-03' },
  { id: 'ORD-1026', customer: 'Jacob Jones', total: 89.99, method: 'Apple Pay', status: 'Delivered', date: '2025-11-04' },
  { id: 'ORD-1027', customer: 'Jenny Wilson', total: 349.49, method: 'Amex', status: 'Delivered', date: '2025-11-05' },
];

export default function PurchasesTable() {
  return (
    <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">Recent Purchases</h3>
        <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-white/60">
              <th className="py-2 pr-4">Order</th>
              <th className="py-2 pr-4">Customer</th>
              <th className="py-2 pr-4">Total</th>
              <th className="py-2 pr-4">Method</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t border-white/10 text-white">
                <td className="py-3 pr-4 font-medium">{row.id}</td>
                <td className="py-3 pr-4">{row.customer}</td>
                <td className="py-3 pr-4">${row.total.toFixed(2)}</td>
                <td className="py-3 pr-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-white/60" />
                  <span>{row.method}</span>
                </td>
                <td className="py-3 pr-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 pr-4 text-white/70">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
