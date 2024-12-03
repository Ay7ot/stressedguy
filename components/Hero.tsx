import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-0 bg-[#1A1A2E] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 via-[#FFD93D]/20 to-[#6BCB77]/20 animate-gradient-xy"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF6B6B]/30 rounded-full blur-[128px]" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#6BCB77]/30 rounded-full blur-[128px]" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="animate-float mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <Image
            src="/stressedguy.png"
            alt="Stressed Guy"
            width={300}
            height={300}
            className="mx-auto relative z-10"
            unoptimized
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent">
          STRESSED GUY
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-2xl mx-auto">
          The ultimate meme token on Solana, bringing fun and innovation to the blockchain!
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative px-8 md:px-12 py-3 md:py-4 bg-black rounded-full leading-none flex items-center">
              <span className="text-gray-100 group-hover:text-white transition duration-200">
                Buy $STRESSEDGUY
              </span>
            </div>
          </button>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6BCB77] to-[#FFD93D] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative px-8 md:px-12 py-3 md:py-4 bg-black rounded-full leading-none flex items-center">
              <span className="text-gray-100 group-hover:text-white transition duration-200">
                Learn More
              </span>
            </div>
          </button>
        </div>

        <div className="text-gray-400 text-sm">
          <p>Join our community and be part of the next big thing in crypto!</p>
          <p>Follow us on social media for the latest updates and memes.</p>
        </div>
      </div>
    </div>
  );
} 