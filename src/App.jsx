import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import AnalyticsCharts from './components/AnalyticsCharts';
import PurchasesTable from './components/PurchasesTable';
import ProductsManager from './components/ProductsManager';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-blue-950/30 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10">
        <DashboardHeader />

        <div className="mt-6 grid gap-4">
          <AnalyticsCharts />
          <div className="grid md:grid-cols-2 gap-4">
            <PurchasesTable />
            <ProductsManager />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
