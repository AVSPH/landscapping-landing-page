import { Leaf } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-4">
              <Leaf className="w-5 h-5" />
              <span>Designing Green Spaces</span>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 leading-tight mb-6">
              We Are Dedicated <span className="font-medium">To Transforming Outdoor Spaces Into Stunning, Sustainable Landscapes That Inspire And Thrive</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl text-lg">
              Morbi lobortis libero eu turpis dignissim, a suscipit purus suscipit. Proin ultricies, libero at mollis vehicula, leo risus ullamcorper ex, sit amet auctor justo orci id magna. Nam dapibus ex ac euismod facilisis.
            </p>
            <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Read More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-3xl overflow-hidden h-80">
            <img 
              src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80" 
              alt="Gardener trimming" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col justify-center h-80">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4 leading-tight">Expert Design &<br/>Custom Solutions</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-80">
            <img 
              src="/planting.png" 
              alt="Planting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-yellow-400 rounded-3xl p-8 flex flex-col justify-center h-80">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4 leading-tight">Sustainable<br/>Practices & Eco-<br/>Friendly Solutions</h3>
            <p className="text-emerald-900/80">
              Cras et nisl lectus. Donec ac ullamcorper quam. Pellentesque scelerisque elit vitae nisl commodo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
