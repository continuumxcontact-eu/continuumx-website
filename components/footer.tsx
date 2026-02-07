'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './providers'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { Linkedin, Instagram, Facebook, Phone } from 'lucide-react'

function XIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="currentColor"
    >
      <path d="M18.9 2H22l-6.77 7.73L23 22h-6.2l-4.86-6.33L6.5 22H3.4l7.25-8.29L1 2h6.35l4.4 5.75L18.9 2Zm-1.08 18.2h1.72L7.28 3.7H5.43l12.39 16.5Z" />
    </svg>
  )
}

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

            {/* ✅ Company legal line */}
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
                  href="mailto:contact@continuumx-ai.com"
                  className="text-sm text-textMuted transition-colors hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
                >
                  continuumx.contact@gmail.com
                </a>
              </li>
            </ul>

            {/* ✅ Social Media Icons under Contact */}
            <div className="mt-4 flex items-center gap-4">
              {/* WhatsApp (Phone icon inside circle) */}
              <a
                href="https://wa.me/201555309965"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-border p-2 text-textMuted transition-all hover:border-primary hover:text-primary"
              >
                <Phone className="h-5 w-5" />
              </a>

              {/* LinkedIn (temporary personal profile) */}
              <a
                href="https://www.linkedin.com/in/mai-magdy-2539b7163/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-2 text-textMuted transition-all hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/continuumx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-border p-2 text-textMuted transition-all hover:border-primary hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/continuumx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-border p-2 text-textMuted transition-all hover:border-primary hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* X */}
              <a
                href="https://x.com/continuumx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="rounded-full border border-border p-2 text-textMuted transition-all hover:border-primary hover:text-primary"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
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
