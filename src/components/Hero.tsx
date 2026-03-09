import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Landscaping Professional" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Bringing <span className="text-white/90 font-medium">Nature's</span><br/>
            Beauty To Your<br/>
            Backyard
          </h1>
          <p className="text-lg text-emerald-50 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors">
            Let's Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="hidden md:flex justify-end items-end h-full pt-32">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl max-w-sm text-emerald-950 shadow-xl">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-emerald-800 mb-6">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="#" className="font-semibold text-emerald-900 hover:text-emerald-700 transition-colors">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
