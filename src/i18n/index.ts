import i18n, { type InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
    navigation: {
      introduction: 'Introduction',
      whatIsContext: 'What is Context',
      whatIsContextEngineering: 'What is Context Engineering',
      whyContextEngineering: 'Why Context Engineering',
      coreFramework: 'Core Framework',
      advancedStrategies: 'Advanced Strategies',
      conclusion: 'Conclusion',
      pages: 'Pages',
    },
    home: {
      title: 'Context Engineering',
      subtitle: 'From AI Alchemy to Engineering Science',
      description: 'A comprehensive guide to understanding and implementing context engineering for reliable AI systems.',
    },
  },
  zh: {
    common: {
      loading: '加载中...',
      error: '错误',
      home: '首页',
      about: '关于',
      contact: '联系',
      language: '语言',
      darkMode: '深色模式',
      lightMode: '浅色模式',
    },
    navigation: {
      introduction: '引言',
      whatIsContext: '什么是上下文',
      whatIsContextEngineering: '什么是上下文工程',
      whyContextEngineering: '为什么要进行上下文工程',
      coreFramework: '核心实践框架',
      advancedStrategies: '进阶策略与未来',
      conclusion: '总结与展望',
      pages: '页面',
    },
    home: {
      title: '上下文工程',
      subtitle: '从AI炼金术到工程学',
      description: '全面理解和实施上下文工程，构建可靠AI系统的完整指南。',
    },
  },
  fr: {
    common: {
      loading: 'Chargement...',
      error: 'Erreur',
      home: 'Accueil',
      about: 'À propos',
      contact: 'Contact',
      language: 'Langue',
      darkMode: 'Mode sombre',
      lightMode: 'Mode clair',
    },
    navigation: {
      introduction: 'Introduction',
      whatIsContext: 'Qu\'est-ce que le contexte',
      whatIsContextEngineering: 'Qu\'est-ce que l\'ingénierie de contexte',
      whyContextEngineering: 'Pourquoi l\'ingénierie de contexte',
      coreFramework: 'Cadre de base',
      advancedStrategies: 'Stratégies avancées',
      conclusion: 'Conclusion',
      pages: 'Pages',
    },
    home: {
      title: 'Ingénierie de Contexte',
      subtitle: 'De l\'alchimie IA à la science de l\'ingénierie',
      description: 'Un guide complet pour comprendre et mettre en œuvre l\'ingénierie de contexte pour des systèmes IA fiables.',
    },
  },
};

const initOptions: InitOptions = {
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh', 'fr'],
  debug: false,
  detection: {
    order: ['path', 'localStorage', 'navigator'],
    lookupFromPathIndex: 0,
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(initOptions);

export default i18n;
