import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-[#1A1A2E] pt-20 pb-10">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B6B]/5 via-transparent to-transparent"></div>

            <div className="relative container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur-sm"></div>
                                <Image
                                    src="/stressedguy.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full relative"
                                    unoptimized
                                />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent">
                                STRESSED GUY
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            The ultimate meme token that turns market stress into success
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-[#FFD93D] transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-to-buy" className="text-gray-400 hover:text-[#FFD93D] transition-colors">
                                    How to Buy
                                </Link>
                            </li>
                            <li>
                                <Link href="#roadmap" className="text-gray-400 hover:text-[#FFD93D] transition-colors">
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://dexscreener.com/solana/yourtokenaddress"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#FFD93D] transition-colors"
                                >
                                    Chart
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-[#FFD93D] transition-colors"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-[#FFD93D] transition-colors"
                                >
                                    Contract
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Community</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://t.me/yourtelegram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.05-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.126.78.89z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/yourtwitter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8">
                    <div className="text-center text-gray-400 text-sm">
                        <p>© 2024 $STRESSEDGUY. All rights reserved.</p>
                        <p className="mt-2">
                            Trading cryptocurrencies involves significant risk and can result in the loss of your capital.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 