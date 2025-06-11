'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-[#d4af62] font-bold text-xl">Workora</span>
        </div>

        {/* Navigation links */}
        <div className="space-x-6 text-sm font-medium text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
