import { dir } from 'i18next'

const languages = ['en', 'es', 'pt'];

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}


export default function RootLayout({
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
