import RegisterComponent from '../../../components/register'

export default function Login ({ params: { lang } } : { params: { lang: string } }) {
  return (
    <>
      <RegisterComponent params={{
        lang
      }}
      />
    </>
  )
}
