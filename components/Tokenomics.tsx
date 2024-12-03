export default function Tokenomics() {
  return (
    <section className="relative py-20 bg-[#1A1A2E]">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD93D]/5 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF6B6B]/20 via-transparent to-transparent"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#FFD93D] mb-2 block animate-fade-in">TOKENOMICS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent animate-gradient-x">
            Token Distribution & Economics
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Understanding the distribution and utility of $STRESSEDGUY - Built for long-term sustainability and community growth
          </p>

          {/* Token Details Summary */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white">Contract:</span>
              <span className="text-[#FFD93D] ml-2">0x...789</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white">Network:</span>
              <span className="text-[#FFD93D] ml-2">Solana</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Supply */}
          <div className="group bg-gradient-to-br from-white/5 via-white/5 to-[#FFD93D]/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FF6B6B]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.17-5.24l-4.17-4.17V6h-2v5.41l4.76 4.76 1.41-1.41z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD93D] transition-colors">Total Supply</h3>
            <p className="text-gray-400">1,000,000,000</p>
            <p className="text-[#FFD93D] mt-2">1B $STRESSEDGUY</p>
            <div className="mt-4 text-sm text-gray-500">
              Fixed supply, no minting function
            </div>
          </div>

          {/* Tax */}
          <div className="group bg-gradient-to-br from-white/5 via-white/5 to-[#FF6B6B]/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FFD93D]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#FFD93D] to-[#6BCB77] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD93D] transition-colors">Tax</h3>
            <p className="text-gray-400">Buy: 5% | Sell: 5%</p>
            <p className="text-[#FFD93D] mt-2">Marketing & Development</p>
            <div className="mt-4 text-sm text-gray-500">
              3% Marketing | 2% Development
            </div>
          </div>

          {/* Liquidity */}
          <div className="group bg-gradient-to-br from-white/5 via-white/5 to-[#6BCB77]/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FFD93D]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#6BCB77] to-[#FF6B6B] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD93D] transition-colors">Liquidity</h3>
            <p className="text-gray-400">Locked for 1 Year</p>
            <p className="text-[#FFD93D] mt-2">100% Safe</p>
            <div className="mt-4 text-sm text-gray-500">
              Initial LP tokens burned forever
            </div>
          </div>

          {/* Max Wallet */}
          <div className="group bg-gradient-to-br from-white/5 via-white/5 to-[#FF6B6B]/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FFD93D]/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD93D] transition-colors">Max Wallet</h3>
            <p className="text-gray-400">2% of Total Supply</p>
            <p className="text-[#FFD93D] mt-2">Anti-Whale Protection</p>
            <div className="mt-4 text-sm text-gray-500">
              Ensures fair distribution
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent">
            Token Utility & Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-[#FFD93D] mb-2">Community Governance</h4>
              <p className="text-gray-400">Token holders can participate in key decisions and project direction</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-[#FFD93D] mb-2">Staking Rewards</h4>
              <p className="text-gray-400">Earn passive income by staking your tokens in our upcoming pools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 