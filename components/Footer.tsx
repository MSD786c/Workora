'use client';

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-black py-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-3 text-center sm:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-[#d4af62] mb-2">
            <Link href="/" className="hover:underline">Workora</Link>
          </h3>
          <p className="text-sm text-gray-700">
            Manpower Supply L.L.C. S.O.C – Providing skilled & unskilled labor across the UAE.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">📞 +971 4 221 2833</p>
          <p className="text-sm">📬 info@workora.ae</p>
          <p className="text-sm">📍 P.O. Box 62575, Dubai, UAE</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/industries" className="hover:underline">Industries</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Workora Manpower Supply L.L.C. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
