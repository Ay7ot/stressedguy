import Image from 'next/image';

export default function About() {
    return (
        <section className="relative py-20 bg-[#1A1A2E]" id="about">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B6B]/5 to-transparent"></div>

            <div className="relative container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative w-64 h-64 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <Image
                                src="/stressedguy.png"
                                alt="About Stressed Guy"
                                width={256}
                                height={256}
                                className="rounded-full relative z-10"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent">
                            About $STRESSEDGUY
                        </h2>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                Born from the chaos of crypto markets, $STRESSEDGUY represents every trader&apos;s journey through the ups and downs of digital assets.
                            </p>
                            <p>
                                We&apos;re not just another meme token - we&apos;re a community-driven movement that turns market stress into success through humor and innovation.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-[#FFD93D] font-semibold mb-2">Community First</h4>
                                    <p className="text-sm">Built by the community, for the community</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-[#FF6B6B] font-semibold mb-2">Fair Launch</h4>
                                    <p className="text-sm">No presale, no team tokens, 100% fair</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 