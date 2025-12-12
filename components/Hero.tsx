import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate rotation based on mouse position relative to center
    // Range: -15deg to 15deg
    const yRotation = ((clientX / innerWidth) - 0.5) * 20; 
    const xRotation = ((clientY / innerHeight) - 0.5) * -20; 

    setRotation({ x: xRotation, y: yRotation });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <header
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center perspective-container"
    >
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center opacity-40 transition-transform duration-100 ease-out" 
           style={{ transform: `scale(1.1) translate(${rotation.y * -0.5}px, ${rotation.x * 0.5}px)` }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60"></div>

      {/* 3D Content Container */}
      <div 
        className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center preserve-3d transition-transform duration-100 ease-out"
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        {/* Text Content */}
        <div 
          className="space-y-6 transform translate-z-10"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-semibold tracking-wide backdrop-blur-sm">
            <MapPin size={14} />
            <span>Discover the Extraordinary</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Travel Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Boundaries</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">
            Experience the world in ways you never imagined. AI-curated itineraries, premium destinations, and seamless booking for the modern explorer.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#destinations" className="bg-accent hover:bg-sky-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              Start Exploring <ArrowRight size={20} />
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all">
              Plan My Trip
            </a>
          </div>
        </div>

        {/* 3D Floating Cards Element */}
        <div className="hidden lg:block relative h-[500px] w-full preserve-3d">
          <div 
            className="absolute top-10 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 animate-float"
            style={{ 
              transform: 'translateZ(100px)',
              animationDelay: '0s'
            }}
          >
            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mountain" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold">Swiss Alps</p>
            </div>
          </div>

          <div 
            className="absolute top-40 left-10 w-60 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 animate-float"
            style={{ 
              transform: 'translateZ(150px)',
              animationDelay: '1.5s'
            }}
          >
             <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bali" className="w-full h-full object-cover" />
             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold">Bali, Indonesia</p>
            </div>
          </div>

          <div 
            className="absolute bottom-10 right-20 w-56 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 animate-float"
            style={{ 
              transform: 'translateZ(120px)',
              animationDelay: '3s'
            }}
          >
             <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paris" className="w-full h-full object-cover" />
             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold">Paris, France</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;