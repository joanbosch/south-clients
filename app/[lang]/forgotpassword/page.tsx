import ForgotPasswordComponent from '../../../components/forgotPassword'

export default function Login ({ params: { lang } } : { params: { lang: string } }) {
  return (
    <>
      <ForgotPasswordComponent params={{
        lang
      }}
      />
    </>
  )
}
