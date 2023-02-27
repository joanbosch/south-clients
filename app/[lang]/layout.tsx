import { dir } from 'i18next'
import React from 'react'
import { languages } from '../i18n/settings'
import './globals.css'
export async function generateStaticParams () {
  return languages.map((lang) => ({ lang }))
}

export default function RootLayout ({
  children,
  params: {
    lang
  }
}: {
  children: React.ReactNode, params: { lang: string }
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
