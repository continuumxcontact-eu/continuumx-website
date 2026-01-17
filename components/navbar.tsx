'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage } from './providers'
import { useTheme } from './providers'
import { getTranslations, getLocalizedPath, type Locale } from '@/lib/i18n'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { locale, setLocale } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = getTranslations(locale)
  const isArabic = locale === 'ar'

  const navLinks = [
    { href: '/services', label: t.nav.services },
    { href: '/courses', label: t.nav.courses },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    const currentPath = window.location.pathname
    const basePath = currentPath.startsWith('/ar') ? currentPath.slice(3) : currentPath
    const newPath = getLocalizedPath(basePath || '/', newLocale)
    window.location.href = newPath
  }

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 border-b border-lightGray bg-surfaceLight/80 backdrop-blur-sm dark:border-borderDark dark:bg-surfaceDark/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href={getLocalizedPath('/', locale)}
              className="flex items-center gap-0 text-textPrimary no-underline dark:text-textOnDark"
            >
              <Image
                src="/brand/mark.png"
                alt="Continuum X"
                width={44}
                height={44}
                className="h-auto w-auto object-contain"
              />
              <span className="text-xl font-semibold leading-none">
                {' '}
                Continuum <span className="ml-1 text-[#7A0E1B]">X</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLocalizedPath(link.href, locale)}
                  className="text-sm font-medium text-textPrimary transition-colors hover:text-primary dark:text-textOnDark dark:hover:text-primary-soft"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Controls */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 rounded-lg border border-lightGray bg-surfaceLight p-1 dark:border-borderDark dark:bg-surfaceDark">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={cn(
                    'px-3 py-1.5 text-xs font-medium transition-colors',
                    locale === 'en'
                      ? 'bg-primary text-white'
                      : 'text-textMuted hover:text-textPrimary dark:text-textMuted dark:hover:text-textOnDark'
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('ar')}
                  className={cn(
                    'px-3 py-1.5 text-xs font-medium transition-colors',
                    locale === 'ar'
                      ? 'bg-primary text-white'
                      : 'text-textMuted hover:text-textPrimary dark:text-textMuted dark:hover:text-textOnDark'
                  )}
                >
                  AR
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="rounded-lg border border-lightGray bg-surfaceLight p-2 text-textPrimary transition-colors hover:bg-lightGray dark:border-borderDark dark:bg-surfaceDark dark:text-textOnDark dark:hover:bg-surfaceDark"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>

              {/* CTA Button */}
              <Link href={getLocalizedPath('/enroll', locale)}>
                <Button size="sm">{t.nav.enroll}</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg border border-lightGray bg-surfaceLight p-2 text-textPrimary md:hidden dark:border-borderDark dark:bg-surfaceDark dark:text-textOnDark"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU (OUTSIDE NAV) ===== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            className={cn(
              'absolute top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl dark:bg-[#0B0F14]',
              isArabic ? 'left-0' : 'right-0'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-lightGray p-4 dark:border-borderDark">
              <span className="text-base font-semibold text-textPrimary dark:text-textOnDark">
                Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border border-lightGray bg-surfaceLight p-2 text-textPrimary dark:border-borderDark dark:bg-surfaceDark dark:text-textOnDark"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Body */}
            <div className="flex h-[calc(100%-64px)] flex-col">
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={getLocalizedPath(link.href, locale)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-textPrimary transition-colors hover:bg-lightGray dark:text-textOnDark dark:hover:bg-surfaceDark"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto border-t border-lightGray p-4 dark:border-borderDark">
                {/* Language */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-textMuted dark:text-textMuted">
                    {isArabic ? 'اللغة' : 'Language'}
                  </span>
                  <div className="flex items-center gap-1 rounded-lg border border-lightGray bg-surfaceLight p-1 dark:border-borderDark dark:bg-surfaceDark">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={cn(
                        'px-3 py-1.5 text-xs font-medium transition-colors',
                        locale === 'en'
                          ? 'bg-primary text-white'
                          : 'text-textMuted hover:text-textPrimary dark:text-textMuted dark:hover:text-textOnDark'
                      )}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('ar')}
                      className={cn(
                        'px-3 py-1.5 text-xs font-medium transition-colors',
                        locale === 'ar'
                          ? 'bg-primary text-white'
                          : 'text-textMuted hover:text-textPrimary dark:text-textMuted dark:hover:text-textOnDark'
                      )}
                    >
                      AR
                    </button>
                  </div>
                </div>

                {/* Theme */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-textMuted dark:text-textMuted">
                    {isArabic ? 'المظهر' : 'Theme'}
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 rounded-lg border border-lightGray bg-surfaceLight px-3 py-2 text-sm font-medium text-textPrimary transition-colors hover:bg-lightGray dark:border-borderDark dark:bg-surfaceDark dark:text-textOnDark dark:hover:bg-surfaceDark"
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="h-4 w-4" />
                        <span>{isArabic ? 'داكن' : 'Dark'}</span>
                      </>
                    ) : (
                      <>
                        <Sun className="h-4 w-4" />
                        <span>{isArabic ? 'فاتح' : 'Light'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* CTA */}
                <Link
                  href={getLocalizedPath('/enroll', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button className="w-full" size="sm">
                    {t.nav.enroll}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
