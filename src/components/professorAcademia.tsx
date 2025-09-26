// src/components/ProfessorSection.tsx
import React from "react";
import profImage from "@/assets/professor-faixa-preta.jpeg"; // <= sua imagem

const ProfessorSection = () => {
  return (
    <section
      id="professor"
      className="relative py-16 lg:py-24 bg-[#f8fff9]" // <- mesma cor da landing
      aria-labelledby="professor-title"
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-10">
          <h2
            id="professor-title"
            className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Professor da <span className="text-success">Academia de Português</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Conheça quem está por trás do método que deixa seu Português mais forte
            para provas e concursos.
          </p>
        </div>

        {/* Grid conteúdo */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Imagem */}
          <figure className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-card">
              <img
                src={profImage}
                alt="Prof. Álvaro Ferreira, 'Faixa Preta' em Português"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground text-center">
              <span className="font-semibold">Prof. Álvaro Ferreira</span> — “Faixa Preta” em Português
            </figcaption>
          </figure>

          {/* Texto */}
          <div>
            <p className="text-foreground leading-relaxed">
              O Álvaro Ferreira é professor de Português há mais de 30 anos. Começou
              lecionando para o Ensino Fundamental e, com o tempo, se especializou em{" "}
              <strong>concursos públicos</strong>, ajudando milhares de alunos a
              destravar a matéria e conquistar aprovações.
            </p>

            <p className="mt-4 text-foreground leading-relaxed">
              Ao longo da carreira, percebeu que o grande entrave dos concurseiros é o{" "}
              <strong>excesso de teoria sem prática</strong>, o que gera a falsa impressão
              de domínio do conteúdo. Observando cursinhos que focavam só na teoria, ele
              criou um formato direto ao ponto, com aplicação imediata em questões.
            </p>

            <p className="mt-4 text-foreground leading-relaxed">
              Nasceu assim o método <strong>FAIXA PRETA</strong>: aulas objetivas +{" "}
              <strong>milhares de questões comentadas</strong>, para você aprender,
              revisar e fixar de verdade — do jeito que as bancas cobram.
            </p>

            {/* Lista de destaques */}
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-success text-success-foreground text-sm font-bold">✓</span>
                <span className="text-foreground">30+ anos de sala de aula</span>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-success text-success-foreground text-sm font-bold">✓</span>
                <span className="text-foreground">Didática prática e direta ao ponto</span>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-success text-success-foreground text-sm font-bold">✓</span>
                <span className="text-foreground">Foco no que cai nas provas</span>
              </li>
            </ul>

            {/* Selo/assinatura opcional */}
            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-success/15 flex items-center justify-center text-success font-bold">
                AF
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">Álvaro Ferreira</div>
                Criador do método <span className="font-medium">Faixa Preta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Borda separadora sutil (opcional) */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </section>
  );
};

export default ProfessorSection;
