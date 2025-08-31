import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            {t('home.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            {t('home.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up">
            {t('home.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button
              onClick={() => {
                const element = document.querySelector('#introduction');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              {t('home.startReading')}
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#core-framework');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary"
            >
              {t('home.coreFramework')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
