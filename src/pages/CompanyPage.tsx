import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const CompanyPage: React.FC = () => {
  const { i18n } = useTranslation();

  if (i18n.language === 'zh') {
    return (
      <div className="container-custom py-16">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            to="/zh"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回首页
          </Link>
        </div>

        <div className="text-center mb-12">
          <img src="/logo.svg" alt="nodal.link" className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">nodal.link</h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">每一条信息都是节点，每一次连接都创造智能</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">关于我们</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            在AI的世界里，每一条信息都是一个节点，每一次连接都创造智能。我们是 <strong className="text-blue-600 dark:text-blue-400">nodal.link</strong>，专注于连接AI理解的节点，将分散的信息转化为智能的上下文网络。我们相信，成功的AI系统不仅依赖于强大的模型，更在于节点间精妙的连接与上下文的智能管理。
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">我们的使命</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            连接AI节点，构建智能系统。我们致力于<strong className="text-blue-600 dark:text-blue-400">将分散的AI信息节点智能连接</strong>，通过先进的上下文工程技术，帮助开发者和企业构建真正可靠、高效且可规模化的AI应用。
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">我们的愿景</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            构建一个<strong className="text-blue-600 dark:text-blue-400">万物互联的AI智能网络</strong>，让每个AI系统都能拥有卓越的"记忆"和"理解"能力，通过智能的节点连接，创造出超越单体模型的集体智能。
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">核心服务</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">节点记忆管理</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">智能持久化与跨会话记忆系统，让AI拥有学习与成长能力</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">智能节点检索</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">两阶段精炼检索，模型驱动的智能节点选择与连接</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">节点网络优化</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">自动压缩与优化，提升节点连接的信息密度与效率</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">多节点架构</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">分层并行处理，构建复杂的智能节点网络系统</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (i18n.language === 'fr') {
    return (
      <div className="container-custom py-16">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            to="/fr"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="text-center mb-12">
          <img src="/logo.svg" alt="nodal.link" className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">nodal.link</h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">Chaque information est un nœud. Chaque connexion crée l'intelligence.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">À propos de nous</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            Dans le monde de l'IA, chaque information est un nœud, chaque connexion crée l'intelligence. Nous sommes <strong className="text-blue-600 dark:text-blue-400">nodal.link</strong>, spécialisés dans la connexion des nœuds de compréhension IA, transformant l'information dispersée en réseaux contextuels intelligents.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Notre mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Connecter les nœuds IA pour des systèmes intelligents. Nous nous engageons à <strong className="text-blue-600 dark:text-blue-400">connecter intelligemment les nœuds d'information IA dispersés</strong>, aidant les développeurs et entreprises à construire des applications IA vraiment fiables, efficaces et évolutives.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Notre vision</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Construire un <strong className="text-blue-600 dark:text-blue-400">réseau d'intelligence IA interconnecté</strong>, permettant à chaque système IA d'avoir des capacités exceptionnelles de "mémoire" et de "compréhension", créant une intelligence collective qui dépasse les modèles individuels.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Services principaux</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Gestion mémoire des nœuds</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Persistance intelligente et systèmes de mémoire inter-sessions</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Recherche intelligente de nœuds</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Recherche raffinée en deux étapes, sélection intelligente pilotée par modèle</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Optimisation réseau de nœuds</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Compression automatique et optimisation de la densité d'information</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Architecture multi-nœuds</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Traitement parallèle en couches, systèmes de réseaux de nœuds complexes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      {/* Back to Home Button */}
      <div className="mb-8">
        <Link
          to="/en"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="text-center mb-12">
        <img src="/logo.svg" alt="nodal.link" className="w-24 h-24 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">nodal.link</h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">Every piece of information is a node. Every connection creates intelligence.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">About Us</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
          In the world of AI, every piece of information is a node, every connection creates intelligence. We are <strong className="text-blue-600 dark:text-blue-400">nodal.link</strong>, specializing in connecting AI understanding nodes, transforming scattered information into intelligent contextual networks that power reliable AI systems.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Connecting AI nodes for intelligent systems. We are committed to <strong className="text-blue-600 dark:text-blue-400">intelligently connecting scattered AI information nodes</strong>, helping developers and enterprises build truly reliable, efficient, and scalable AI applications through advanced context engineering.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Our Vision</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Building an <strong className="text-blue-600 dark:text-blue-400">interconnected AI intelligence network</strong>, enabling every AI system to have exceptional "memory" and "understanding" capabilities, creating collective intelligence that transcends individual models through intelligent node connections.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">Core Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Node Memory Management</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Intelligent persistence and cross-session memory systems, enabling AI learning and growth</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Intelligent Node Retrieval</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Two-stage refined retrieval, model-driven intelligent node selection and connection</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Node Network Optimization</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Automatic compression and optimization, enhancing information density and efficiency of node connections</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Multi-Node Architecture</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Layered parallel processing, building complex intelligent node network systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};
