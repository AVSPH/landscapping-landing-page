import { Leaf } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Residential Garden Makeover",
      image: "/makeover.png",
      height: "h-[500px]",
      marginTop: "mt-0"
    },
    {
      title: "Commercial Landscaping For Office Complex",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
      height: "h-[450px]",
      marginTop: "lg:mt-24"
    },
    {
      title: "Eco-Friendly Urban Garden",
      image: "/eco-garden.png",
      height: "h-[450px]",
      marginTop: "lg:mt-12"
    },
    {
      title: "Luxury Landscape Design For Private Estate",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80",
      height: "h-[500px]",
      marginTop: "mt-0"
    }
  ];

  return (
    <section className="py-24 bg-[#eef3ef]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold mb-4">
            <Leaf className="w-5 h-5" />
            <span>From Concept To Creation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 leading-tight mb-6">
            Discover The Art <span className="font-medium">Of Landscaping Through Our Completed Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Morbi lobortis libero eu turpis dignissim, a suscipit purus suscipit. Proin ultricies, libero at mollis vehicula, leo risus ullamcorper ex, sit amet auctor justo orci id magna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`relative rounded-3xl overflow-hidden ${project.height} ${project.marginTop} group`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-emerald-900 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
