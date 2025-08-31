import React from 'react';
import { useTranslation } from 'react-i18next';

export const WhyContextEngineeringSection: React.FC = () => {
  const { i18n } = useTranslation();

  const title = i18n.language === 'zh'
    ? '为什么要进行上下文工程'
    : i18n.language === 'fr'
    ? "Pourquoi l'ingénierie de contexte est essentielle"
    : 'Why Context Engineering is Essential';

  const points = i18n.language === 'zh'
    ? [
        '上下文腐烂：随着token增多，模型更易忽略指令，推理能力下降。',
        '简单累加上下文会导致成本与延迟激增，并引发上下文溢出。',
        '缺乏上下文的Agent表现机械，无法真正推进任务。',
      ]
    : i18n.language === 'fr'
    ? [
        "Pourriture du contexte : avec plus de tokens, le modèle ignore plus d'instructions et raisonne moins bien.",
        "Addition naïve du contexte = coût et latence en hausse, risque de dépassement de fenêtre contexte.",
        "Sans contexte, les agents restent mécaniques et inefficaces.",
      ]
    : [
        'Context rot: more tokens often degrade instruction following and reasoning.',
        'Naive accumulation raises cost/latency and risks context overflow.',
        'Agents without context are mechanical and ineffective.',
      ];

  return (
    <section id="why-context-engineering" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
          <ul className="space-y-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
