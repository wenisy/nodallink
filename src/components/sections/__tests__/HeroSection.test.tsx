import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../HeroSection'

// Mock useTranslation to return test values
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'home.title': 'NodalLink',
        'home.subtitle': 'Connecting AI Intelligence Through Context',
        'home.description': 'We connect the nodes of AI understanding, transforming scattered information into intelligent, contextual networks that power reliable AI systems.',
        'home.startReading': 'Start Reading',
        'home.coreFramework': 'Core Framework',
      }
      return translations[key] || key
    },
    ready: true,
    i18n: {
      language: 'en',
    },
  }),
}))

describe('HeroSection', () => {
  it('renders the main title', () => {
    render(<HeroSection />)
    expect(screen.getByText('NodalLink')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<HeroSection />)
    expect(screen.getByText('Connecting AI Intelligence Through Context')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HeroSection />)
    expect(screen.getByText(/We connect the nodes of AI understanding/)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<HeroSection />)
    expect(screen.getByText('Start Reading')).toBeInTheDocument()
    expect(screen.getByText('Core Framework')).toBeInTheDocument()
  })

  it('has proper heading structure', () => {
    render(<HeroSection />)
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveTextContent('NodalLink')
  })

  it('renders scroll indicator', () => {
    render(<HeroSection />)
    // Look for the SVG element by its class
    const scrollIndicator = document.querySelector('svg')
    expect(scrollIndicator).toBeInTheDocument()
    expect(scrollIndicator).toHaveClass('w-6', 'h-6', 'text-gray-400')
  })
})
