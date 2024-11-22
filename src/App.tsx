import React from 'react';
import { Code, Rocket, Brain, Mail, Github } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        name="笠井菊平"
        title="SE"
        links={['About', 'Experience', 'Projects', 'Skills', 'Contact']}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 笠井菊平. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;