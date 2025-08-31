import i18n, { type InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
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
        pages: 'About Us',
      },
      home: {
        title: 'nodal.link',
        subtitle: 'Connecting AI Intelligence Through Context',
        description: 'We connect the nodes of AI understanding, transforming scattered information into intelligent, contextual networks that power reliable AI systems.',
        startReading: 'Start Reading',
        coreFramework: 'Core Framework',
      },
      brand: {
        tagline: 'Every piece of information is a node. Every connection creates intelligence.',
        mission: 'Connecting AI nodes for intelligent systems',
      },
    },
  },
  zh: {
    translation: {
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
        pages: '关于我们',
      },
      home: {
        title: 'nodal.link',
        subtitle: '通过上下文连接AI智能',
        description: '我们连接AI理解的节点，将分散的信息转化为智能的上下文网络，驱动可靠的AI系统。',
        startReading: '开始阅读',
        coreFramework: '核心框架',
      },
      brand: {
        tagline: '每一条信息都是节点，每一次连接都创造智能。',
        mission: '连接AI节点，构建智能系统',
      },
    },
  },
  fr: {
    translation: {
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
        pages: 'À propos de nous',
      },
      home: {
        title: 'nodal.link',
        subtitle: 'Connecter l\'intelligence IA par le contexte',
        description: 'Nous connectons les nœuds de compréhension IA, transformant l\'information dispersée en réseaux contextuels intelligents qui alimentent des systèmes IA fiables.',
        startReading: 'Commencer la lecture',
        coreFramework: 'Cadre principal',
      },
      brand: {
        tagline: 'Chaque information est un nœud. Chaque connexion crée l\'intelligence.',
        mission: 'Connecter les nœuds IA pour des systèmes intelligents',
      },
    },
  },
};

const initOptions: InitOptions = {
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh', 'fr'],
  debug: false,
  ns: ['translation'],
  defaultNS: 'translation',
  detection: {
    order: ['path', 'localStorage', 'navigator'],
    lookupFromPathIndex: 0,
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
    bindI18n: 'languageChanged loaded',
    bindI18nStore: 'added removed',
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(initOptions)
  .then(() => {
    console.log('i18n initialized successfully');
    console.log('Current language:', i18n.language);
    console.log('Available resources:', Object.keys(i18n.getResourceBundle(i18n.language, 'translation') || {}));
  })
  .catch((error) => {
    console.error('i18n initialization failed:', error);
  });

export default i18n;
