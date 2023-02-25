import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useTranslation } from '../i18n'

const inter = Inter({ subsets: ['latin'] })

export default async function Home({ params: { lang } } : { params: { lang: string } }) {
  const { t } = await useTranslation(lang, 'translation')
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lang}/login`}>
        login page
      </Link>
    </>
  )
}
