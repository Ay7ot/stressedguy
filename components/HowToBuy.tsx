export default function HowToBuy() {
  return (
    <section className="relative py-20 bg-[#1A1A2E]" id="how-to-buy">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6BCB77]/5 to-transparent"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent">
            How to Buy
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get your $STRESSEDGUY tokens in a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FF6B6B]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Create Wallet</h3>
            <p className="text-gray-400">Download and install Phantom Wallet from the official website</p>
          </div>

          {/* Step 2 */}
          <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FFD93D]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-[#FFD93D] to-[#6BCB77] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Get SOL</h3>
            <p className="text-gray-400">Buy SOL from an exchange and send it to your wallet</p>
          </div>

          {/* Step 3 */}
          <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#6BCB77]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-[#6BCB77] to-[#FF6B6B] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Connect Wallet</h3>
            <p className="text-gray-400">Connect your wallet to Raydium or Jupiter Exchange</p>
          </div>

          {/* Step 4 */}
          <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FF6B6B]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
              4
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Swap</h3>
            <p className="text-gray-400">Swap your SOL for $STRESSEDGUY tokens</p>
          </div>
        </div>
      </div>
    </section>
  );
} 