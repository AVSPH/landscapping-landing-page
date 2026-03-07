import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
