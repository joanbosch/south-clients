import NewClientComponent from '../../../../components/NewClient'

export default async function NewClient ({ params: { lang } } : { params: { lang: string } }) {
  return (
    <>
      <NewClientComponent params={{
        lang
      }}
      />
    </>
  )
}
