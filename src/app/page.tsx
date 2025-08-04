'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="ml-3 text-white font-bold text-xl">ImageEdit Pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-white/90 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            </div>
            <div className="flex space-x-4">
              <button className="text-white/90 hover:text-white transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Image Editing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your photos with cutting-edge AI technology. Remove backgrounds, enhance quality, 
            and create stunning visuals in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl">
              Try AI Editor Free
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg h-32 flex items-center justify-center">
                  <span className="text-white/70">Before</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-white font-semibold">AI Magic</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg h-32 flex items-center justify-center">
                  <span className="text-white/70">After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our advanced AI algorithms make professional photo editing accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Background Removal",
                description: "Remove backgrounds instantly with pixel-perfect precision using our AI technology",
                icon: "🎭"
              },
              {
                title: "Smart Enhancement",
                description: "Automatically improve lighting, colors, and sharpness with intelligent AI adjustments",
                icon: "✨"
              },
              {
                title: "Object Removal",
                description: "Seamlessly remove unwanted objects from your photos while maintaining natural look",
                icon: "🎯"
              },
              {
                title: "Style Transfer",
                description: "Apply artistic styles and filters using advanced neural network technology",
                icon: "🎨"
              },
              {
                title: "Face Enhancement",
                description: "Perfect portrait editing with AI-powered skin smoothing and feature enhancement",
                icon: "👤"
              },
              {
                title: "Batch Processing",
                description: "Edit multiple images simultaneously with consistent AI-powered results",
                icon: "⚡"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Images?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of creators who use AI ImageEdit Pro to bring their vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all">
              View Pricing Plans
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="ml-2 text-white font-bold">ImageEdit Pro</span>
              </div>
              <p className="text-white/70">
                The future of image editing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 AI ImageEdit Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}