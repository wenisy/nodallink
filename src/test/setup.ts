import '@testing-library/jest-dom'
import React from 'react'
import { vi } from 'vitest'

// Mock i18next for tests
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
    ready: true,
  }),
  initReactI18next: {
    type: '3rdParty',
    init: vi.fn(),
  },
}))

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: any }) => children,
  Link: ({ children, to, ...props }: { children: any; to: string;[key: string]: any }) => {
    return React.createElement('a', { href: to, ...props }, children)
  },
  useNavigate: () => vi.fn(),
  useParams: () => ({ lang: 'en' }),
}))


