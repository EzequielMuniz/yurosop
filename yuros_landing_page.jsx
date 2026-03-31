"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function YurosLandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-800 relative">
        <h1 className="text-xl md:text-2xl font-bold">YUROS</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#features" className="hover:opacity-70">Features</a>
          <a href="#marketplace" className="hover:opacity-70">Marketplace</a>
          <a href="#creator" className="hover:opacity-70">Creator</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-1 md:px-4 md:py-2 rounded-xl text-sm"
          >
            Mode
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center py-6 gap-4 md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#marketplace" onClick={() => setMenuOpen(false)}>Marketplace</a>
            <a href="#creator" onClick={() => setMenuOpen(false)}>Creator</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          YUROS — Autonomous AI Business Operator
        </motion.h1>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl md:max-w-3xl mb-10 opacity-80">
          An AI that builds, launches, and sells digital businesses automatically.
          YUROS creates products, operates marketplaces, and generates revenue
          without human intervention.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold w-full sm:w-auto">
            Launch YUROS
          </button>
          <button className="border px-6 py-3 rounded-2xl w-full sm:w-auto">
            Explore Marketplace
          </button>
          <button className="border px-6 py-3 rounded-2xl w-full sm:w-auto">
            View Projects
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">What is YUROS?</h2>
        <p className="text-base md:text-lg opacity-80 leading-relaxed">
          YUROS is an autonomous AI entrepreneur designed to build profitable
          internet businesses. It analyzes market opportunities, creates digital
          products, launches systems, sells through Stripe, promotes through
          social media, and manages a marketplace of AI-built solutions.
        </p>
      </section>

      {/* How it works */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-gray-800">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">1. Analyze</h3>
            <p className="opacity-70">YUROS scans market opportunities</p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">2. Build</h3>
            <p className="opacity-70">Creates digital products and systems</p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">3. Launch</h3>
            <p className="opacity-70">Deploys and sells automatically</p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">4. Scale</h3>
            <p className="opacity-70">Optimizes and grows revenue</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">Core Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            "Autonomous AI Operator",
            "Digital Product Creation",
            "Marketplace System",
            "Revenue Generation",
            "Stripe Integration",
            "Twitter Automation",
            "Business Intelligence",
            "Continuous Execution",
            "Scalable Infrastructure",
          ].map((feature, index) => (
            <div
              key={index}
              className="border border-gray-800 p-6 rounded-2xl hover:border-gray-500 transition"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Marketplace */}
      <section
        id="marketplace"
        className="px-4 md:px-8 py-16 md:py-24 border-t border-gray-800 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6">AI Marketplace</h2>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">
          Discover digital products, tools, and business solutions created by
          YUROS.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-2xl w-full sm:w-auto">
          Visit Marketplace
        </button>
      </section>

      {/* Creator */}
      <section id="creator" className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Creator</h2>
        <p className="opacity-80 text-base md:text-lg">
          Created by Ezequiel Muniz — AI systems builder, digital entrepreneur,
          and automation specialist focused on building autonomous business
          ecosystems.
        </p>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-16 md:py-24 text-center border-t border-gray-800">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Start Building with YUROS
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-2xl w-full sm:w-auto">
            Launch App
          </button>
          <button className="border px-6 py-3 rounded-2xl w-full sm:w-auto">
            View Marketplace
          </button>
          <button className="border px-6 py-3 rounded-2xl w-full sm:w-auto">
            Join Ecosystem
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 md:px-8 py-10 text-center opacity-70 text-sm">
        <p>yurosbusiness.site</p>
        <p>Autonomous AI Business Ecosystem</p>
        <p className="mt-4">Twitter | GitHub | Website</p>
      </footer>
    </div>
  );
}