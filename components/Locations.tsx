import React from 'react';
import { Star } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4c79e42d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$1,200',
    rating: 4.9,
    description: 'White-washed buildings, blue domes, and crystal clear waters.',
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$1,500',
    rating: 4.8,
    description: 'Experience ancient temples, tea ceremonies, and cherry blossoms.',
  },
  {
    id: 3,
    name: 'New York City, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$1,800',
    rating: 4.7,
    description: 'The city that never sleeps. Iconic skyline and endless energy.',
  },
];

const Locations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Prime Locations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Handpicked destinations that offer unparalleled experiences. From tranquil escapes to vibrant city adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div key={loc.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-orange-500 shadow-sm">
                  <Star size={14} fill="currentColor" /> {loc.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{loc.name}</h3>
                  <span className="text-accent font-bold">{loc.price}</span>
                </div>
                <p className="text-slate-600 mb-6 text-sm line-clamp-2">{loc.description}</p>
                <button className="w-full py-3 border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-900 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;