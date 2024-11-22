import React from 'react';

const experiences = [
  {
    title: '大規模システムのバックエンド開発',
    role: 'ソフトウェアエンジニア',
    description: '〇〇というアプリのシステムの設計に従事',
    company: 'ABCテクノロジー',
    period: '2020 - Present'
  },
  {
    title: 'フロントエンド開発リード',
    role: 'シニアエンジニア',
    description: 'Webアプリケーションの設計・開発をリード',
    company: 'XYZソリューションズ',
    period: '2018 - 2020'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-gray-600">{exp.role}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="mt-2 text-gray-700">{exp.description}</p>
            <p className="mt-2 text-sm text-gray-600">{exp.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}