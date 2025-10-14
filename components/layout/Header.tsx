'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Identity } from '@coinbase/onchainkit/identity';
import { Menu, X, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-card sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Stethoscope className="w-6 h-6 text-accent" />
            <span className="text-gradient">VetTech X-ray</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/guides" className="nav-link">
              Guides
            </Link>
            <Link href="/community" className="nav-link">
              Community
            </Link>
            <Link href="/badges" className="nav-link">
              Badges
            </Link>
            <Link href="/profile" className="nav-link">
              Profile
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="hidden md:block">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
            </Wallet>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-fg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <nav className="flex flex-col gap-4">
              <Link href="/guides" className="nav-link">
                Guides
              </Link>
              <Link href="/community" className="nav-link">
                Community
              </Link>
              <Link href="/badges" className="nav-link">
                Badges
              </Link>
              <Link href="/profile" className="nav-link">
                Profile
              </Link>
              <div className="pt-4 border-t border-gray-700">
                <Wallet>
                  <ConnectWallet>
                    <Avatar className="h-6 w-6" />
                    <Name />
                  </ConnectWallet>
                </Wallet>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
