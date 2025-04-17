import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import Education from '../components/Education';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <div className="my-12 flex justify-center">
        <div className="w-2 h-2 rounded-full bg-gray-400 opacity-60" />
      </div>
      <Projects />
      <div className="my-12 flex justify-center">
        <div className="w-2 h-2 rounded-full bg-gray-400 opacity-60" />
      </div>
      <Certifications />
      <div className="my-12 flex justify-center">
        <div className="w-2 h-2 rounded-full bg-gray-400 opacity-60" />
      </div>
      <Experience />
      <div className="my-12 flex justify-center">
        <div className="w-2 h-2 rounded-full bg-gray-400 opacity-60" />
      </div>
      <Education />
    </main>
  );
}
