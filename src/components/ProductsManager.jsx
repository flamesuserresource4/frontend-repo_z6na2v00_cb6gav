import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Package } from 'lucide-react';

export default function ProductsManager() {
  const [products, setProducts] = useState([
    { id: 1, name: 'TRNDZ Hoodie', price: 69.99, stock: 24 },
    { id: 2, name: 'TRNDZ Beanie', price: 24.99, stock: 58 },
    { id: 3, name: 'TRNDZ Jacket', price: 149.0, stock: 8 },
  ]);
  const [form, setForm] = useState({ id: null, name: '', price: '', stock: '' });
  const [isEditing, setIsEditing] = useState(false);

  const resetForm = () => setForm({ id: null, name: '', price: '', stock: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const price = parseFloat(form.price);
    const stock = parseInt(form.stock, 10);
    if (!form.name || isNaN(price) || isNaN(stock)) return;

    if (isEditing) {
      setProducts((prev) => prev.map((p) => (p.id === form.id ? { ...p, name: form.name, price, stock } : p)));
    } else {
      const id = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
      setProducts((prev) => [...prev, { id, name: form.name, price, stock }]);
    }

    setIsEditing(false);
    resetForm();
  };

  const editProduct = (p) => {
    setIsEditing(true);
    setForm({ id: p.id, name: p.name, price: String(p.price), stock: String(p.stock) });
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    if (isEditing && form.id === id) {
      setIsEditing(false);
      resetForm();
    }
  };

  return (
    <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium flex items-center gap-2">
          <Package className="w-5 h-5" /> Products
        </h3>
      </div>

      <form onSubmit={onSubmit} className="grid md:grid-cols-5 gap-3 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="md:col-span-2 w-full rounded-lg bg-white/10 text-white placeholder-white/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
          className="w-full rounded-lg bg-white/10 text-white placeholder-white/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm((f) => ({ ...f, stock: e.target.value }))}
          className="w-full rounded-lg bg-white/10 text-white placeholder-white/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 flex items-center justify-center gap-2">
          {isEditing ? (<><Pencil className="w-4 h-4" /> Update</>) : (<><Plus className="w-4 h-4" /> Add</>)}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-white/60">
              <th className="py-2 pr-4">ID</th>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Price</th>
              <th className="py-2 pr-4">Stock</th>
              <th className="py-2 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-white/10 text-white">
                <td className="py-3 pr-4">{p.id}</td>
                <td className="py-3 pr-4 font-medium">{p.name}</td>
                <td className="py-3 pr-4">${p.price.toFixed(2)}</td>
                <td className="py-3 pr-4">{p.stock}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <button onClick={() => editProduct(p)} className="px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center gap-1">
                      <Pencil className="w-4 h-4" /> Edit
                    </button>
                    <button onClick={() => deleteProduct(p.id)} className="px-2 py-1 rounded-md bg-red-500/20 hover:bg-red-500/30 text-red-200 flex items-center gap-1">
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
