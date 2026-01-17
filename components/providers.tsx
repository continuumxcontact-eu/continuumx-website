'use client'

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'
import { Locale } from '@/lib/i18n'

type Theme = 'light' | 'dark'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  // Read initial locale on mount
  useEffect(() => {
    // 1) URL path has priority
    const pathname = window.location.pathname
    if (pathname.startsWith('/ar')) {
      setLocale('ar')
      return
    }

    // 2) fallback to localStorage
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved === 'en' || saved === 'ar') setLocale(saved)
  }, [])

  // Apply to <html> and persist
  useEffect(() => {
    localStorage.setItem('locale', locale)
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  // Read initial theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved === 'light' || saved === 'dark') setTheme(saved)
  }, [])

  // Apply to <html> and persist
  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
