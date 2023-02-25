import Link from 'next/link'
import LoginComponent from '../../../components/login'

export default function Login({ params: { lang } } : { params: { lang: string } }) {

  return (
    <>
      <h1>Hi from login page!</h1>
      <LoginComponent params={{
        lang: lang
      }} />
      <Link href={`/${lang}`}>
        back
      </Link>
    </>
  )
}