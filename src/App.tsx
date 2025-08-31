import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';

const supportedLanguages = ['en', 'zh', 'fr'];

const LanguageWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // Redirect to default language if invalid language
      navigate('/en', { replace: true });
    }
  }, [lang, i18n, navigate]);

  if (!lang || !supportedLanguages.includes(lang)) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages" element={<CompanyPage />} />
        <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
      </Routes>
      <LanguageSwitcher />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/:lang/*" element={<LanguageWrapper />} />
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
};

export default App;
