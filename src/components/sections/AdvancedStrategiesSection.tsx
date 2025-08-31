import React from 'react';
import { useTranslation } from 'react-i18next';

export const AdvancedStrategiesSection: React.FC = () => {
  const { i18n } = useTranslation();

  const title = i18n.language === 'zh' ? '进阶策略与未来' : i18n.language === 'fr' ? 'Stratégies avancées et futur' : 'Advanced Strategies & Future';
  const items = i18n.language === 'zh'
    ? [
        '两阶段检索：粗搜高召回 + 精炼重排序',
        '生成式基准：自动生成问答对构建黄金数据集',
        '记忆系统：好的记忆系统=好的上下文工程系统',
        '代码检索：语义 + 精确匹配并重排',
        'MCP：面向工具与数据的标准化接口',
      ]
    : i18n.language === 'fr'
    ? [
        'Recherche en deux étapes : rappel élevé + reranking',
        'Benchmark génératif : QA auto pour set d’or',
        'Système de mémoire : base d’une bonne ing. de contexte',
        'Code : sémantique + matching exact + reranking',
        'MCP : protocole standard pour outils/données',
      ]
    : [
        'Two-stage retrieval: high-recall coarse + refined reranking',
        'Generative benchmarking: auto QA pairs for golden sets',
        'Memory systems: good memory = good context engineering',
        'Code retrieval: semantic + exact matches with reranking',
        'MCP: standardized interface for tools/data',
      ];

  return (
    <section id="advanced-strategies" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
        <ul className="max-w-3xl mx-auto list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
          {items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
