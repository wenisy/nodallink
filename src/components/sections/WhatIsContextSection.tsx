import React from 'react';
import { useTranslation } from 'react-i18next';
import { MermaidDiagram } from '../MermaidDiagram';

export const WhatIsContextSection: React.FC = () => {
  const { i18n } = useTranslation();

  const getContent = () => {
    if (i18n.language === 'zh') {
      return {
        title: '什么是上下文',
        definition: '从本质上讲，**上下文是提供给大语言模型（LLM）的、用于完成下一步推理或生成任务的全部信息的集合**。它远不止聊天记录那么简单。',
        categories: [
          {
            title: '指导性上下文 (Instructional Context)',
            description: '指导模型"该做什么"以及"如何去做"，为模型的行为设定框架、目标和规则。',
            examples: '系统提示词、任务描述、少样本示例 (Few-shot examples)、输出格式定义。提示词工程主要就是优化这类上下文。'
          },
          {
            title: '信息性上下文 (Informational Context)',
            description: '告诉模型"需要知道什么知识"，为模型提供解决问题所必需的事实、数据与知识。',
            examples: '我们常说的RAG（检索增强生成）以及记忆（短期记忆、长期记忆、状态和草稿本等）。'
          },
          {
            title: '行动性上下文 (Actionable Context)',
            description: '告诉模型"能做什么"以及"做了之后的结果"，为模型提供与外部世界交互的能力。',
            examples: '工具定义、工具调用和结果、以及工具追踪。'
          }
        ],
        analogy: '如果将Agent视为一种新型操作系统，那么大模型就像是中央处理器（CPU），**上下文窗口就像是内存，而上下文工程则是这个操作系统中的内存管理器**。'
      };
    } else if (i18n.language === 'fr') {
      return {
        title: 'Qu\'est-ce que le contexte',
        definition: 'Essentiellement, **le contexte est l\'ensemble de toutes les informations fournies au grand modèle de langage (LLM) pour accomplir la prochaine tâche de raisonnement ou de génération**. C\'est bien plus que de simples historiques de chat.',
        categories: [
          {
            title: 'Contexte instructionnel',
            description: 'Guide le modèle sur "quoi faire" et "comment le faire", établissant le cadre, les objectifs et les règles pour le comportement du modèle.',
            examples: 'Prompts système, descriptions de tâches, exemples few-shot, définitions de format de sortie. L\'ingénierie de prompts optimise principalement ce type de contexte.'
          },
          {
            title: 'Contexte informationnel',
            description: 'Indique au modèle "quelles connaissances il doit connaître", fournissant les faits, données et connaissances nécessaires pour résoudre les problèmes.',
            examples: 'RAG (génération augmentée par récupération) et mémoire (mémoire à court terme, à long terme, état et brouillons, etc.).'
          },
          {
            title: 'Contexte actionnable',
            description: 'Indique au modèle "ce qu\'il peut faire" et "les résultats après action", fournissant la capacité d\'interagir avec le monde extérieur.',
            examples: 'Définitions d\'outils, appels d\'outils et résultats, ainsi que suivi d\'outils.'
          }
        ],
        analogy: 'Si nous considérons l\'Agent comme un nouveau type de système d\'exploitation, alors le grand modèle est comme l\'unité centrale de traitement (CPU), **la fenêtre de contexte est comme la mémoire, et l\'ingénierie de contexte est le gestionnaire de mémoire de ce système d\'exploitation**.'
      };
    } else {
      return {
        title: 'What is Context',
        definition: 'Essentially, **context is the collection of all information provided to a Large Language Model (LLM) to complete the next reasoning or generation task**. It\'s far more than just chat history.',
        categories: [
          {
            title: 'Instructional Context',
            description: 'Guides the model on "what to do" and "how to do it," setting the framework, goals, and rules for the model\'s behavior.',
            examples: 'System prompts, task descriptions, few-shot examples, output format definitions. Prompt engineering primarily optimizes this type of context.'
          },
          {
            title: 'Informational Context',
            description: 'Tells the model "what knowledge it needs to know," providing the facts, data, and knowledge necessary to solve problems.',
            examples: 'RAG (Retrieval-Augmented Generation) and memory (short-term memory, long-term memory, state and drafts, etc.).'
          },
          {
            title: 'Actionable Context',
            description: 'Tells the model "what it can do" and "the results after doing it," providing the ability to interact with the external world.',
            examples: 'Tool definitions, tool calls and results, as well as tool tracking.'
          }
        ],
        analogy: 'If we view an Agent as a new type of operating system, then the large model is like the central processing unit (CPU), **the context window is like memory, and context engineering is the memory manager of this operating system**.'
      };
    }
  };

  const content = getContent();

  const contextDiagram = `
    graph TD
        A[Context] --> B[Instructional Context]
        A --> C[Informational Context]
        A --> D[Actionable Context]
        
        B --> B1[System Prompts]
        B --> B2[Task Descriptions]
        B --> B3[Few-shot Examples]
        B --> B4[Output Formats]
        
        C --> C1[RAG Knowledge]
        C --> C2[Short-term Memory]
        C --> C3[Long-term Memory]
        C --> C4[State & Drafts]
        
        D --> D1[Tool Definitions]
        D --> D2[Tool Calls]
        D --> D3[Tool Results]
        D --> D4[Tool Tracking]
        
        style A fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
        style B fill:#10b981,stroke:#047857,stroke-width:2px,color:#fff
        style C fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
        style D fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
  `;

  return (
    <section id="what-is-context" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-gray-900 dark:text-white">
            {content.title}
          </h2>
          
          {/* Definition */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <p 
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: content.definition.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-600 dark:text-primary-400">$1</strong>')
                }}
              />
            </div>
          </div>

          {/* Context Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                {i18n.language === 'zh' ? '上下文的三种核心类别' : i18n.language === 'fr' ? 'Trois catégories principales de contexte' : 'Three Core Categories of Context'}
              </h3>
              
              <div className="space-y-6">
                {content.categories.map((category, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {category.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {category.description}
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>{i18n.language === 'zh' ? '示例：' : i18n.language === 'fr' ? 'Exemples :' : 'Examples:'}</strong> {category.examples}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                {i18n.language === 'zh' ? '上下文类型图' : i18n.language === 'fr' ? 'Diagramme des types de contexte' : 'Context Types Diagram'}
              </h3>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <MermaidDiagram diagram={contextDiagram} />
              </div>
            </div>
          </div>

          {/* Analogy */}
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {i18n.language === 'zh' ? '形象类比' : i18n.language === 'fr' ? 'Analogie' : 'Analogy'}
            </h3>
            <p 
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: content.analogy.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-600 dark:text-primary-400">$1</strong>')
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
