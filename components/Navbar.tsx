'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ]

  const servicesDropdown = [
    { name: 'Blue Collar', href: '/services#blue-collar' },
    { name: 'White Collar', href: '/services#white-collar' },
    { name: 'Payroll Management', href: '/services#payroll-management' },
  ]

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/workora-logo.png"
              alt="Workora Logo"
              width={180}
              height={80}
              className="h-18 w-auto md:h-20"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              onMouseEnter={() => link.hasDropdown && setIsServicesDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesDropdownOpen(false)}
            >
              {link.hasDropdown ? (
                <div className="relative">
                  <button
                    className="flex items-center text-sm font-medium transition-colors hover:text-[#d4af62] text-black"
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {servicesDropdown.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#d4af62] transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-[#d4af62] text-black"
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-black"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.hasDropdown ? (
                    <div>
                      <Link 
                        href={link.href}
                        className="block text-black hover:text-[#d4af62] font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {servicesDropdown.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-600 hover:text-[#d4af62] py-1 text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href}
                      className="block text-black hover:text-[#d4af62] font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
