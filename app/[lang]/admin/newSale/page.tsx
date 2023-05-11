import NewSaleComponent from '../../../../components/NewSale'

export default async function NewSale ({ params: { lang } } : { params: { lang: string } }) {
  return (
    <>
      <NewSaleComponent params={{
        lang
      }}
      />
    </>
  )
}
