import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'タスク管理アプリ',
    description: 'チームメンバー間のタスク共有と進捗管理が簡単に行えるアプリケーション',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/example/project1',
    demo: 'https://example.com/demo1'
  },
  {
    name: 'IoTホームセキュリティシステム',
    description: 'IoTデバイスを使用してホームセキュリティを強化するシステム',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/example/project2',
    demo: 'https://example.com/demo2'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-5 h-5 mr-1" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}