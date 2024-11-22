import React from 'react';

const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Python', 'SQL', 'MongoDB'],
  tools: ['Git', 'Docker', 'Terraform'],
  other: ['AWS', 'CI/CD', 'テスト自動化']
};

export default function Skills() {
  return (
    <section id="skills" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Other</h3>
          <div className="flex flex-wrap gap-2">
            {skills.other.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}