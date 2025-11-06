import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg">TRNDZ</h3>
            <p className="text-slate-400 mt-2 text-sm">
              Future-ready winterwear crafted for comfort, function, and a clean aesthetic.
            </p>
          </div>
          <div>
            <h4 className="text-sky-200 font-medium">Support</h4>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-sky-200">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-sky-200">Care Guide</a></li>
              <li><a href="#" className="hover:text-sky-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sky-200 font-medium">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <Instagram className="h-5 w-5 text-sky-100" />
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <Twitter className="h-5 w-5 text-sky-100" />
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <Youtube className="h-5 w-5 text-sky-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-slate-500 text-xs">
          © {new Date().getFullYear()} TRNDZ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
