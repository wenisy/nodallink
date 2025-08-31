import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'common.home': 'Home',
        'common.about': 'About',
        'common.contact': 'Contact',
      }
      return translations[key] || key
    },
    ready: true,
    i18n: {
      language: 'en',
    },
  }),
}))

describe('Footer', () => {
  it('renders the company name', () => {
    render(<Footer />)
    expect(screen.getByText('NodalLink')).toBeInTheDocument()
  })

  it('renders the company tagline', () => {
    render(<Footer />)
    expect(screen.getByText('Connecting AI nodes for intelligent systems')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('has correct social media link URLs', () => {
    render(<Footer />)
    
    const twitterLink = screen.getByText('Twitter').closest('a')
    const linkedinLink = screen.getByText('LinkedIn').closest('a')
    const emailLink = screen.getByText('Email').closest('a')
    
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/nodallink')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/company/nodallink')
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@nodal.link')
  })

  it('opens external links in new tab', () => {
    render(<Footer />)
    
    const twitterLink = screen.getByText('Twitter').closest('a')
    const linkedinLink = screen.getByText('LinkedIn').closest('a')
    
    expect(twitterLink).toHaveAttribute('target', '_blank')
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders copyright year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<Footer />)
    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })
})
