import React from 'react';
import { BookOpen, FileText, Mic, Pen, Brain, Target, Search, Mail } from 'lucide-react';

const CourseContent = () => {
  const topics = [
    { icon: BookOpen, title: 'Morfologia', description: 'Classes de palavras e estruturas' },
    { icon: FileText, title: 'Sintaxe', description: 'Análise sintática completa' },
    { icon: Mic, title: 'Fonética e Fonologia', description: 'Sons e pronúncia' },
    { icon: Pen, title: 'Ortografia', description: 'Regras de escrita e acentuação' },
    { icon: Brain, title: 'Semântica e Estilística', description: 'Significado e estilo textual' },
    { icon: Target, title: 'Assuntos específicos', description: 'Temas direcionados para concursos' },
    { icon: Search, title: 'Interpretação de texto', description: 'Compreensão e análise textual' },
    { icon: Mail, title: 'Redação oficial', description: 'Correspondência oficial e formatação' }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* separador superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-success text-success-foreground px-6 py-2 rounded-full font-semibold text-sm mb-6">
            88 horas de curso + 1300 questões comentadas
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que você vai encontrar dentro do curso
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <topic.icon className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
              <p className="text-muted-foreground text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* separador inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </section>
  );
};

export default CourseContent;
