import { Leaf } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Consultation & Planning",
      description: "We start by understanding your vision, preferences, and space requirements. Our team will discuss ideas, assess your outdoor area, and create a customized plan that suits your needs and budget."
    },
    {
      number: "2",
      title: "Design & Proposal",
      description: "Our expert designers will craft a detailed landscape design, incorporating plants, hardscapes, and features that enhance your space. We provide a clear proposal, ensuring transparency in costs and timelines."
    },
    {
      number: "3",
      title: "Installation & Execution",
      description: "Once the design is finalized, our skilled landscapers bring it to life with precision and care. From planting to hardscaping, we ensure high-quality execution for a beautiful and functional outdoor space."
    },
    {
      number: "4",
      title: "Maintenance & Care",
      description: "To keep your landscape looking its best, we offer ongoing maintenance services, including lawn care, irrigation management, and seasonal updates. Enjoy a lush, thriving outdoor space all year round!"
    }
  ];

  return (
    <section className="py-24 bg-[#0a472e] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 text-emerald-100 font-semibold mb-4">
            <Leaf className="w-5 h-5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-yellow-400">Creating Stunning</span> Landscapes In Just A Few <span className="text-yellow-400">Simple Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-[1px] border-t border-dashed border-emerald-500/50 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-[#0a472e] text-2xl font-bold mb-8 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-emerald-100/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
