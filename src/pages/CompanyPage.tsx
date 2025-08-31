import React from 'react';
import { useTranslation } from 'react-i18next';

export const CompanyPage: React.FC = () => {
  const { i18n } = useTranslation();

  if (i18n.language === 'zh') {
    return (
      <div className="container-custom py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">关于我们</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">在这个AI浪潮汹涌的时代，我们正努力将AI应用的开发从依赖直觉和运气的“炼金术”转变为一门可测试、可迭代、可优化的“工程学”。我们相信，成功的AI系统并非仅依赖于强大的模型，更在于其背后对“上下文”的精妙管理和运用。</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">我们的使命 (Our Mission)</h2>
        <p className="text-gray-700 dark:text-gray-300">我们的使命是赋能开发者和企业，<strong className="text-blue-600 dark:text-blue-400">通过提供领先的上下文工程解决方案，将AI应用开发从不确定性中解放出来，使其变得可靠、高效且可规模化</strong>。我们致力于帮助AI智能体在每一步执行任务时，都能够<strong className="text-blue-600 dark:text-blue-400">智能地组装出最优的上下文组合</strong>，从而确保任务的成功完成，并克服因上下文管理不当导致的“性能鸿沟”和“幻觉”问题。</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">我们的愿景 (Our Vision)</h2>
        <p className="text-gray-700 dark:text-gray-300">我们设想一个未来：<strong className="text-blue-600 dark:text-blue-400">所有的AI应用都能够拥有卓越的“记忆”和“理解”能力</strong>，不再受“上下文腐烂”或信息缺失的困扰，成为真正强大、智能且可信赖的伙伴。我们希望成为构建高质量AI应用的核心基石，让上下文工程成为每一家AI原生公司的核心竞争力。我们坚信，通过严谨的工程学方法和对极致工艺的追求，可以开创一个AI与人类更高效协作的新时代。</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">我们能做的事情 (Our Offerings)</h2>
        <ol className="list-decimal pl-6 space-y-6 text-gray-700 dark:text-gray-300">
          <li>
            <strong>智能上下文持久化与记忆管理</strong>：会话内与跨会话记忆系统；学习与成长型Agent支持。
          </li>
          <li>
            <strong>高级上下文检索与智能选择</strong>：两阶段精炼检索，模型驱动精选，多源信息融合。
          </li>
          <li>
            <strong>上下文优化与高效压缩</strong>：自动总结、修剪与干扰规避，提升信息密度。
          </li>
          <li>
            <strong>多智能体架构与上下文隔离</strong>：分层处理、并行隔离、工具与沙盒集成。
          </li>
          <li>
            <strong>上下文质量评估与生成式基准测试</strong>：生成黄金数据集，量化评估检索与排序，诊断上下文腐烂。
          </li>
        </ol>
      </div>
    );
  }

  if (i18n.language === 'fr') {
    return (
      <div className="container-custom py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">À propos de nous</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">À l'ère de l'IA, nous transformons le développement des applications d'une « alchimie » basée sur l'intuition en une ingénierie testable, itérable et optimisable. La réussite ne dépend pas uniquement des modèles, mais d'une gestion du contexte de haute précision.</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Notre mission</h2>
        <p className="text-gray-700 dark:text-gray-300">Donner aux équipes les moyens de <strong className="text-blue-600 dark:text-blue-400">créer des systèmes IA fiables, efficaces et scalables</strong> grâce à l'ingénierie de contexte, en <strong className="text-blue-600 dark:text-blue-400">assemblant le meilleur contexte à chaque étape</strong> pour éviter les hallucinations et fossés de performance.</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Notre vision</h2>
        <p className="text-gray-700 dark:text-gray-300">Un futur où <strong className="text-blue-600 dark:text-blue-400">chaque application IA possède une mémoire et une compréhension de premier ordre</strong>, sans pourriture de contexte ni manque d'information. Nous voulons être l'infrastructure centrale des applications IA de qualité.</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Nos offres</h2>
        <ol className="list-decimal pl-6 space-y-6 text-gray-700 dark:text-gray-300">
          <li><strong>Persistance et mémoire de contexte</strong> : mémoire intra/inter-sessions ; agents apprenants.</li>
          <li><strong>Recherche avancée et sélection intelligente</strong> : recherche en deux étapes, reranking LLM, fusion multi-sources.</li>
          <li><strong>Optimisation et compression</strong> : résumés, pruning, réduction des interférences.</li>
          <li><strong>Architecture multi-agents et isolation</strong> : traitement en parallèle, intégration outils/sandbox.</li>
          <li><strong>Évaluation et benchmarking génératif</strong> : jeux d'or, mesures quantifiées, diagnostic de pourriture.</li>
        </ol>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Us</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">We transform AI development from intuition-driven "alchemy" into an engineering discipline that is testable, iterable, and optimizable. Success comes not only from strong models, but from masterful context management.</p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Our Mission</h2>
      <p className="text-gray-700 dark:text-gray-300">Empower teams to <strong className="text-blue-600 dark:text-blue-400">build reliable, efficient, and scalable AI systems</strong> through context engineering—<strong className="text-blue-600 dark:text-blue-400">assembling optimal context at every step</strong> to prevent hallucinations and performance gaps.</p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Our Vision</h2>
      <p className="text-gray-700 dark:text-gray-300">A future where <strong className="text-blue-600 dark:text-blue-400">every AI application has outstanding memory and understanding</strong>, free from context rot or missing information—trusted partners in real work.</p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Our Offerings</h2>
      <ol className="list-decimal pl-6 space-y-6 text-gray-700 dark:text-gray-300">
        <li><strong>Context persistence & memory</strong>: intra/inter-session memory; learning agents.</li>
        <li><strong>Advanced retrieval & selection</strong>: two-stage retrieval, LLM reranking, multi-source fusion.</li>
        <li><strong>Optimization & compression</strong>: summarization, pruning, interference reduction.</li>
        <li><strong>Multi-agent & isolation</strong>: layered, parallel processing; tools/sandbox integration.</li>
        <li><strong>Evaluation & generative benchmarking</strong>: golden sets, quantified metrics, context rot diagnosis.</li>
      </ol>
    </div>
  );
};
