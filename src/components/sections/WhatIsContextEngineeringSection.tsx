import React from 'react';
import { useTranslation } from 'react-i18next';

export const WhatIsContextEngineeringSection: React.FC = () => {
  const { i18n } = useTranslation();

  const title = i18n.language === 'zh'
    ? '什么是上下文工程'
    : i18n.language === 'fr'
    ? "Qu'est-ce que l'ingénierie de contexte"
    : 'What is Context Engineering';

  const content = i18n.language === 'zh'
    ? '上下文工程是一门系统性的学问，专注于设计、构建并维护一个动态系统，负责为Agent执行任务的每一步智能地组装出最优的上下文组合，从而确保任务能够被可靠、高效地完成。'
    : i18n.language === 'fr'
    ? "L'ingénierie de contexte conçoit et maintient un système dynamique qui assemble intelligemment le meilleur contexte à chaque étape, garantissant des tâches fiables et efficaces."
    : 'Context engineering designs and maintains a dynamic system that intelligently assembles the optimal context at each step, ensuring reliable and efficient task completion.';

  return (
    <section id="what-is-context-engineering" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{content}</p>
        </div>
      </div>
    </section>
  );
};
