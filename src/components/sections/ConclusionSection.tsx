import React from 'react';
import { useTranslation } from 'react-i18next';

export const ConclusionSection: React.FC = () => {
  const { i18n } = useTranslation();

  const title = i18n.language === 'zh' ? '总结与展望' : i18n.language === 'fr' ? 'Conclusion et perspectives' : 'Conclusion & Outlook';
  const text = i18n.language === 'zh'
    ? 'AI 应用开发的重心已从“找完美提示词”转向“构建能在每一步动态组装完美上下文的系统”。熟练运用写入、选取、压缩、隔离，将决定系统能否走向可靠与规模化。'
    : i18n.language === 'fr'
    ? "Le focus passe des prompts parfaits à la conception d'un système robuste qui assemble dynamiquement le bon contexte à chaque étape."
    : 'The focus shifts from perfect prompts to designing robust systems that dynamically assemble the right context at each step.';

  return (
    <section id="conclusion" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </section>
  );
};
