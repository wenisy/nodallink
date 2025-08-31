import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { LanguageSwitcher } from '../LanguageSwitcher'

// Mock react-router-dom
const mockNavigate = vi.fn()
const mockLocation = { pathname: '/en' }

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
  }
})

// Mock react-i18next
const mockChangeLanguage = vi.fn().mockResolvedValue(undefined)
const mockI18n = {
  language: 'en',
  changeLanguage: mockChangeLanguage,
}

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: mockI18n,
  }),
}))

const LanguageSwitcherWrapper = () => (
  <BrowserRouter>
    <LanguageSwitcher />
  </BrowserRouter>
)

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockI18n.language = 'en'
    mockLocation.pathname = '/en'
  })

  it('renders current language button', () => {
    render(<LanguageSwitcherWrapper />)
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('🇺🇸')).toBeInTheDocument()
  })

  it('opens language menu when clicked', () => {
    render(<LanguageSwitcherWrapper />)
    
    const button = screen.getByRole('button', { name: /change language/i })
    fireEvent.click(button)
    
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('中文')).toBeInTheDocument()
    expect(screen.getByText('Français')).toBeInTheDocument()
  })

  it('changes language when option is selected', async () => {
    render(<LanguageSwitcherWrapper />)
    
    // Open menu
    const button = screen.getByRole('button', { name: /change language/i })
    fireEvent.click(button)
    
    // Click Chinese option
    const chineseOption = screen.getByText('中文')
    fireEvent.click(chineseOption)
    
    // Verify language change was called
    await waitFor(() => {
      expect(mockChangeLanguage).toHaveBeenCalledWith('zh')
    })
    
    // Verify navigation was called
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/zh', { replace: true })
    })
  })

  it('handles path with pages correctly', async () => {
    mockLocation.pathname = '/en/pages'
    
    render(<LanguageSwitcherWrapper />)
    
    // Open menu and select French
    const button = screen.getByRole('button', { name: /change language/i })
    fireEvent.click(button)
    
    const frenchOption = screen.getByText('Français')
    fireEvent.click(frenchOption)
    
    // Should navigate to French pages
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/fr/pages', { replace: true })
    })
  })

  it('closes menu when backdrop is clicked', () => {
    render(<LanguageSwitcherWrapper />)
    
    // Open menu
    const button = screen.getByRole('button', { name: /change language/i })
    fireEvent.click(button)
    
    expect(screen.getByText('English')).toBeInTheDocument()
    
    // Click backdrop
    const backdrop = document.querySelector('.fixed.inset-0')
    if (backdrop) {
      fireEvent.click(backdrop)
    }
    
    // Menu should be closed
    expect(screen.queryByText('English')).not.toBeInTheDocument()
  })
})
