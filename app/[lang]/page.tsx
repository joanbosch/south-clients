import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ params: { lang } } : { params: { lang: string } }) {
  return (
    <>
      <h1>Hi there!</h1>
      <Link href={`/${lang}/login`}>
        login page
      </Link>
    </>
  )
}
