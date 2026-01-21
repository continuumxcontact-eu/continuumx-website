'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './providers'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'

export function Footer() {
  const { locale } = useLanguage()
  const t = getTranslations(locale)

  return (
    <footer className="border-t border-lightGray bg-surfaceLight dark:border-borderDark dark:bg-surfaceDark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link
              href={getLocalizedPath('/', locale)}
              className="mb-4 flex items-center gap-3 text-textPrimary no-underline dark:text-textOnDark"
            >
              <Image
                src="/brand/logo.png"
                alt="Continuum X"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-semibold">Continuum X</span>
            </Link>

            <p className="mb-4 max-w-md text-sm text-textMuted dark:text-textMuted">
              {t.footer.description}
            </p>

            {/* ✅ Company legal line (adds Registry Code politely) */}
            <p className="text-xs text-textMuted dark:text-textMuted">
              {t.footer.company}
              <span className="mx-2">•</span>
              {locale === 'ar' ? 'رقم السجل التجاري' : 'Registry Code'}: 17407421
              <span className="mx-2">•</span>
              {locale === 'ar' ? 'تالين، إستونيا' : 'Tallinn, Estonia'}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-textPrimary dark:text-textOnDark">
              {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={getLocalizedPath('/services', locale)}
                  className="text-sm text-textMuted transition-colors hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
                >
                  {t.footer.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/courses', locale)}
                  className="text-sm text-textMuted transition-colors hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
                >
                  {t.footer.links.courses}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/privacy', locale)}
                  className="text-sm text-textMuted transition-colors hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
                >
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/terms', locale)}
                  className="text-sm text-textMuted transition-colors hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
                >
                  {t.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-textPrimary dark:text-textOnDark">
              {t.contact.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:continuumx.contact@gmail.com"
                  className="text-sm text-textMuted transition-colors hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
                >
                  continuumx.contact@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-lightGray pt-8 dark:border-borderDark">
          <p className="text-center text-xs text-textMuted dark:text-textMuted">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
