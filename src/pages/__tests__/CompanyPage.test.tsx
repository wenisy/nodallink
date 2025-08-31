import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CompanyPage } from '../CompanyPage'

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }: { children: any; to: string;[key: string]: any }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

// Mock useTranslation for English
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: { language: 'en' },
  }),
}))

describe('CompanyPage', () => {
  it('renders company name and tagline', () => {
    render(<CompanyPage />)
    expect(screen.getByRole('heading', { name: 'NodalLink' })).toBeInTheDocument()
    expect(screen.getByText('Every piece of information is a node. Every connection creates intelligence.')).toBeInTheDocument()
  })

  it('renders back to home link', () => {
    render(<CompanyPage />)
    const backLink = screen.getByText('Back to Home').closest('a')
    expect(backLink).toHaveAttribute('href', '/en')
  })

  it('renders company logo', () => {
    render(<CompanyPage />)
    const logo = screen.getByAltText('NodalLink')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/logo.svg')
  })

  it('renders about us section', () => {
    render(<CompanyPage />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/In the world of AI, every piece of information is a node/)).toBeInTheDocument()
  })

  it('renders mission section', () => {
    render(<CompanyPage />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText(/Connecting AI nodes for intelligent systems/)).toBeInTheDocument()
  })

  it('renders vision section', () => {
    render(<CompanyPage />)
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
    expect(screen.getByText(/interconnected AI intelligence network/)).toBeInTheDocument()
  })

  it('renders core services section', () => {
    render(<CompanyPage />)
    expect(screen.getByText('Core Services')).toBeInTheDocument()
    expect(screen.getByText('Node Memory Management')).toBeInTheDocument()
    expect(screen.getByText('Intelligent Node Retrieval')).toBeInTheDocument()
    expect(screen.getByText('Node Network Optimization')).toBeInTheDocument()
    expect(screen.getByText('Multi-Node Architecture')).toBeInTheDocument()
  })
})
