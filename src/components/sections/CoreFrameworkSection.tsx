import React from 'react';
import { useTranslation } from 'react-i18next';

export const CoreFrameworkSection: React.FC = () => {
  const { i18n } = useTranslation();

  const title = i18n.language === 'zh' ? '核心实践框架' : i18n.language === 'fr' ? 'Cadre de base' : 'Core Framework';
  const items = i18n.language === 'zh'
    ? [
        { title: '写入 (Writing)', desc: '会话内/持久化写入，跨越上下文窗口限制。' },
        { title: '选取 (Selection)', desc: '确定性、模型驱动与检索式选取，动态拉取相关信息。' },
        { title: '压缩 (Compression)', desc: '自动总结、修剪，提高信息密度。' },
        { title: '隔离 (Isolation)', desc: '多Agent架构、工具与沙盒，系统级上下文管理。' },
      ]
    : i18n.language === 'fr'
    ? [
        { title: 'Écriture', desc: 'Mémoire intra/persistante pour dépasser la fenêtre de contexte.' },
        { title: 'Sélection', desc: 'Règles, modèle et recherche pour récupérer l’essentiel.' },
        { title: 'Compression', desc: 'Résumé automatique, pruning, densité accrue.' },
        { title: 'Isolation', desc: 'Architecture multi-agents, outils/sandbox.' },
      ]
    : [
        { title: 'Writing', desc: 'In-session/persistent memory beyond context window limits.' },
        { title: 'Selection', desc: 'Rule-based, model-driven, and retrieval selection of relevant info.' },
        { title: 'Compression', desc: 'Auto summarization, pruning to increase information density.' },
        { title: 'Isolation', desc: 'Multi-agent architectures, tools and sandbox for system-level mgmt.' },
      ];

  return (
    <section id="core-framework" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{it.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
