import Image from 'next/image';

export default function Roadmap() {
    return (
        <section className="relative py-20 bg-[#1A1A2E]" id="roadmap">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD93D]/5 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF6B6B]/20 via-transparent to-transparent"></div>

            {/* Floating images */}
            <div className="absolute right-0 top-20 opacity-20 animate-float">
                <Image
                    src="https://source.unsplash.com/featured/?cryptocurrency"
                    alt="Decorative"
                    width={150}
                    height={150}
                    className="rounded-full blur-sm"
                    mized
                />
            </div>
            <div className="absolute left-0 bottom-20 opacity-20 animate-float delay-200">
                <Image
                    src="https://source.unsplash.com/featured/?cryptocurrency"
                    alt="Decorative"
                    width={100}
                    height={100}
                    className="rounded-full blur-sm"
                    mized
                />
            </div>

            <div className="relative container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="mb-8 relative w-24 h-24 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <Image
                            src="/stressedguy.png"
                            alt="Roadmap Icon"
                            width={96}
                            height={96}
                            className="rounded-full relative z-10"
                            mized
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent">
                        Roadmap
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our journey to revolutionize the meme token space with $STRESSEDGUY
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Phase 1 */}
                    <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FF6B6B]/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 relative w-16 h-16">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <Image
                                src="/stressedguy.png"
                                alt="Phase 1"
                                width={64}
                                height={64}
                                className="rounded-full relative z-10"
                                mized
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF6B6B] transition-colors">Phase 1: Launch</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>✅ Website Launch</li>
                            <li>✅ Token Creation</li>
                            <li>✅ Initial Marketing Campaign</li>
                            <li>✅ Community Building</li>
                        </ul>
                    </div>

                    {/* Phase 2 */}
                    <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FFD93D]/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 relative w-16 h-16">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD93D] to-[#6BCB77] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <Image
                                src="/stressedguy.png"
                                alt="Phase 2"
                                width={64}
                                height={64}
                                className="rounded-full relative z-10"
                                mized
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD93D] transition-colors">Phase 2: Growth</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>🔄 Exchange Listings</li>
                            <li>🔄 Partnerships</li>
                            <li>🔄 Meme Contests</li>
                            <li>🔄 Community Events</li>
                        </ul>
                    </div>

                    {/* Phase 3 */}
                    <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#6BCB77]/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 relative w-16 h-16">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6BCB77] to-[#FF6B6B] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <Image
                                src="/stressedguy.png"
                                alt="Phase 3"
                                width={64}
                                height={64}
                                className="rounded-full relative z-10"
                                mized
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6BCB77] transition-colors">Phase 3: Expansion</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>🔄 NFT Launch</li>
                            <li>🔄 Staking Platform</li>
                            <li>🔄 Global Marketing</li>
                            <li>🔄 DAO Formation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}