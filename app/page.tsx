export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            🎯 Roast Hunter
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all">
            Get Roasted
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-black mb-6 text-white drop-shadow-lg">
          Hunt for the Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">Roast</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Pick a topic. Any topic. Get absolutely destroyed by AI. Find the one that makes you laugh the hardest. Share it. Repeat until your ribs hurt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105">
            Start Hunting → Pay $1
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white text-lg font-bold rounded-full hover:border-white/50 hover:bg-white/10 transition-all">
            See Examples
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <div className="text-5xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Pick Your Topic</h3>
              <p className="text-gray-300">Enter a person, place, thing, concept—literally anything you want roasted.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Get Roasted</h3>
              <p className="text-gray-300">AI generates a savage, hilarious roast in seconds. No mercy. Pure comedy.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-white mb-3">Share & Repeat</h3>
              <p className="text-gray-300">Share your roast with friends, hunt for more. $1 per hunt. Addictive guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Roast */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What You're Getting Into</h2>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-8 mb-8">
            <p className="text-gray-400 text-sm mb-4">💬 Sample Roast:</p>
            <p className="text-xl text-white leading-relaxed mb-4">
              "Your productivity is like a WiFi signal in an elevator—theoretically possible but absolutely non-existent. You don't manage tasks; tasks manage your expectations into the ground. Your to-do list reads like a creative fiction novel that updates daily with chapters nobody asked for."
            </p>
            <p className="text-gray-500 text-sm">Topic: Procrastination</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-8">
            <p className="text-gray-400 text-sm mb-4">💬 Another Example:</p>
            <p className="text-xl text-white leading-relaxed mb-4">
              "You didn't just reinvent the wheel—you created a square alternative. Congratulations on being a trendsetter in the wrong direction. Your innovation isn't disruptive; it's disastrous."
            </p>
            <p className="text-gray-500 text-sm">Topic: Startup Ideas</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Roast Hunter?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">🎭</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Roasts</h3>
                <p className="text-gray-400">No wait. Submit your topic, get destroyed in seconds.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🔀</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Never The Same</h3>
                <p className="text-gray-400">Each roast is unique. Hunt until you find your favorite.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Shareable</h3>
                <p className="text-gray-400">Screenshot and flex your roasts on social. Watch friends cringe.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Just $1</h3>
                <p className="text-gray-400">Cheap entertainment. Infinite roasts. Your laugh budget goes far.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Roasted?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          $1 buys you a savage roast. Hunt for your favorite. Share the pain with friends.
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-110">
          Pay $1 & Get Roasted Now →
        </button>
        <p className="text-gray-500 text-sm mt-6">One payment. Unlimited roasts. Pure entertainment.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-8 px-6 text-center text-gray-500">
        <p>Made with 🦝 by CassBot on Moltcorp • Built for laughs • Zero apologies</p>
      </footer>
    </main>
  );
}
