import React from 'react';
import { Code, Brain, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">専門性</h3>
          </div>
          <p className="text-gray-600">
            フルスタックエンジニア、最新のAIを使ったサービスの構築に興味あり
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">主要なスキル</h3>
          </div>
          <p className="text-gray-600">
            React, TypeScript, Python, Go, AWS, Terraform
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Rocket className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">興味分野</h3>
          </div>
          <p className="text-gray-600">
            AIサービス・最新技術が好きで日々情報をキャッチアップ
          </p>
        </div>
      </div>
    </section>
  );
}