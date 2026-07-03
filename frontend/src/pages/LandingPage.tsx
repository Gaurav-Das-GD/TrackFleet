import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, MapPin, BarChart3, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-hero-gradient text-white overflow-hidden">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
          <span className="font-bold text-2xl">TrackFleet</span>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
          </Link>

          <Link to="/register">
            <Button variant="gradient">
              Get Started
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm mb-6 border border-white/10">
            Smart Logistics & Vehicle Monitoring
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Monitor Faster.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Deliver Better.
            </span>
          </h1>

          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">
            Advanced transportation management platform with real-time vehicle
            tracking, route optimization, delivery analytics, and intelligent
            fleet monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                variant="gradient"
                className="w-full sm:w-auto"
              >
                Create Free Account
              </Button>
            </Link>

            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: MapPin,
              title: 'Live Monitoring',
              desc: 'Track vehicle locations and route status in real time',
            },
            {
              icon: BarChart3,
              title: 'Operational Analytics',
              desc: 'Monitor revenue, shipments, and performance metrics',
            },
            {
              icon: Shield,
              title: 'Secure Platform',
              desc: 'Protected access with authentication and encrypted data',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-8 text-left card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-300" />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-white/60 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        <Zap className="w-4 h-4 inline mr-1" />
        TrackFleet © 2026 — Intelligent Logistics Management Platform
      </footer>
    </div>
  );
}