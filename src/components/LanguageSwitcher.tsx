import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    console.log('Language change requested:', langCode);
    console.log('Current pathname:', location.pathname);

    const pathSegments = location.pathname.split('/').filter(Boolean);
    console.log('Path segments:', pathSegments);

    // Remove current language from path if it exists
    if (languages.some(lang => lang.code === pathSegments[0])) {
      pathSegments.shift();
      console.log('Removed language from path, remaining segments:', pathSegments);
    }

    // Build new path with selected language
    let newPath = `/${langCode}`;
    if (pathSegments.length > 0) {
      newPath += `/${pathSegments.join('/')}`;
    }
    console.log('New path:', newPath);

    // Change language first
    i18n.changeLanguage(langCode).then(() => {
      console.log('Language changed successfully to:', langCode);
      // Navigate to the new path after language change is complete
      navigate(newPath, { replace: true });
    }).catch((error) => {
      console.error('Failed to change language:', error);
      // Still try to navigate even if language change fails
      navigate(newPath, { replace: true });
    });

    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-3 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
          aria-label="Change language"
        >
          <span className="text-xl">{currentLanguage.flag}</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {currentLanguage.code.toUpperCase()}
          </span>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${currentLanguage.code === language.code
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300'
                  }`}
              >
                <span className="text-xl">{language.flag}</span>
                <div>
                  <div className="font-medium">{language.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {language.code.toUpperCase()}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
