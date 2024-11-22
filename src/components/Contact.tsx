import React from 'react';
import { Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>
      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="space-y-6">
          <a
            href="mailto:sdmsk2456@gmail.com"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-6 h-6 mr-3" />
            <span>sdmsk2456@gmail.com</span>
          </a>
          
          <a
            href="https://github.com/kipeco8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6 mr-3" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}