"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed w-full z-20 top-0 left-0 px-4 py-4">
            <nav className="relative max-w-7xl mx-auto" ref={menuRef}>
                {/* Main Navbar Content */}
                <div className="backdrop-blur-lg bg-black/30 border border-white/20 rounded-full shadow-lg">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="relative w-10 h-10">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur-sm animate-pulse"></div>
                                        <Image
                                            src="/stressedguy.png"
                                            alt="Logo"
                                            width={40}
                                            height={40}
                                            className="rounded-full relative"
                                        />
                                    </div>
                                    <span className="text-xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent">
                                        STRESSED GUY
                                    </span>
                                </Link>
                            </div>

                            <div className="hidden md:flex items-center space-x-6">
                                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                                    About
                                </Link>
                                <Link href="#how-to-buy" className="text-white/80 hover:text-white transition-colors">
                                    How to Buy
                                </Link>
                                <Link href="#roadmap" className="text-white/80 hover:text-white transition-colors">
                                    Roadmap
                                </Link>

                                <a
                                    href="https://dexscreener.com/solana/yourtokenaddress"
                                    className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="flex items-center">
                                        📊 Chart
                                    </span>
                                </a>

                                {/* Social Icons */}
                                <div className="flex items-center space-x-4">
                                    <a href="https://t.me/yourgroup"
                                        className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.05-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.126.78.89z" />
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/yourprofile"
                                        className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                </div>

                                <button className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                                    <div className="relative px-6 py-2 bg-black rounded-full leading-none flex items-center">
                                        <span className="text-gray-100 group-hover:text-white transition duration-200">
                                            Buy $STRESSEDGUY
                                        </span>
                                    </div>
                                </button>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleMobileMenu} className="text-white hover:text-white/80">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`absolute w-full left-0 top-full mt-4 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                >
                    <div className="backdrop-blur-lg bg-black/50 border border-white/20 rounded-2xl shadow-lg p-4 space-y-3">
                        <Link
                            href="#about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-xl"
                        >
                            About
                        </Link>
                        <Link
                            href="#how-to-buy"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-xl"
                        >
                            How to Buy
                        </Link>
                        <Link
                            href="#roadmap"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-xl"
                        >
                            Roadmap
                        </Link>
                        <a
                            href="https://dexscreener.com/solana/yourtokenaddress"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📊 Chart
                        </a>
                        <div className="flex space-x-2 px-4 pt-2">
                            <a
                                href="https://t.me/yourgroup"
                                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.05-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.126.78.89z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/yourprofile"
                                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
} 