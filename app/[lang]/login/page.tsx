import LoginComponent from '../../../components/login'

export default function Login ({ params: { lang } } : { params: { lang: string } }) {
  return (
    <>
      <LoginComponent params={{
        lang
      }}
      />
    </>
  )
}
