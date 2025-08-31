import React from 'react';
import { useTranslation } from 'react-i18next';

export const IntroductionSection: React.FC = () => {
  const { i18n } = useTranslation();

  const getContent = () => {
    if (i18n.language === 'zh') {
      return {
        title: '引言：从AI炼金术到工程学',
        content: [
          '当前AI应用开发，尤其是Agent的构建，常被比喻为一场"神秘的炼金术"。尽管技术看似先进，但许多AI Agent在实际使用中却频繁"掉链子"，其根本原因往往并非模型能力不足，而是**上下文工程的失败**。',
          '我们需要将AI开发从依赖直觉和运气的"炼金术"转变为一门严谨的"工程学"。而"上下文工程"正是实现这一转变的关键。',
          '本页面将深入探讨什么是上下文、上下文工程、其重要性、核心实践框架及未来趋势。'
        ]
      };
    } else if (i18n.language === 'fr') {
      return {
        title: 'Introduction : De l\'alchimie IA à la science de l\'ingénierie',
        content: [
          'Le développement d\'applications IA actuelles, en particulier la construction d\'Agents, est souvent comparé à une "alchimie mystérieuse". Bien que la technologie semble avancée, de nombreux Agents IA échouent fréquemment en usage réel, non pas à cause d\'un manque de capacités du modèle, mais à cause de **l\'échec de l\'ingénierie de contexte**.',
          'Nous devons transformer le développement IA d\'une "alchimie" basée sur l\'intuition et la chance en une "science de l\'ingénierie" rigoureuse. L\'"ingénierie de contexte" est la clé pour réaliser cette transformation.',
          'Cette page explorera en profondeur ce qu\'est le contexte, l\'ingénierie de contexte, son importance, le cadre de pratiques de base et les tendances futures.'
        ]
      };
    } else {
      return {
        title: 'Introduction: From AI Alchemy to Engineering Science',
        content: [
          'Current AI application development, especially Agent construction, is often compared to a "mysterious alchemy." Although the technology seems advanced, many AI Agents frequently "drop the ball" in actual use, not because of insufficient model capabilities, but because of **context engineering failures**.',
          'We need to transform AI development from "alchemy" based on intuition and luck into rigorous "engineering science." "Context engineering" is the key to achieving this transformation.',
          'This page will deeply explore what context is, context engineering, its importance, core practice frameworks, and future trends.'
        ]
      };
    }
  };

  const content = getContent();

  return (
    <section id="introduction" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12 text-gray-900 dark:text-white">
            {content.title}
          </h2>

          <div className="space-y-8">
            {content.content.map((paragraph, index) => (
              <div key={index} className="prose prose-lg max-w-none dark:prose-invert">
                <p
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-600 dark:text-primary-400">$1</strong>')
                  }}
                />
              </div>
            ))}
          </div>

          {/* Key Points */}
          <div className="mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {i18n.language === 'zh' ? '核心观点' : i18n.language === 'fr' ? 'Points clés' : 'Key Points'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {i18n.language === 'zh' ? '从炼金术到科学' : i18n.language === 'fr' ? 'De l\'alchimie à la science' : 'From Alchemy to Science'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {i18n.language === 'zh' ? '系统化的工程方法' : i18n.language === 'fr' ? 'Approche d\'ingénierie systématique' : 'Systematic engineering approach'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {i18n.language === 'zh' ? '上下文工程' : i18n.language === 'fr' ? 'Ingénierie de contexte' : 'Context Engineering'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {i18n.language === 'zh' ? '可靠AI系统的关键' : i18n.language === 'fr' ? 'Clé des systèmes IA fiables' : 'Key to reliable AI systems'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {i18n.language === 'zh' ? '实践框架' : i18n.language === 'fr' ? 'Cadre pratique' : 'Practical Framework'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {i18n.language === 'zh' ? '可操作的最佳实践' : i18n.language === 'fr' ? 'Meilleures pratiques exploitables' : 'Actionable best practices'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
