import React from 'react'

interface BillmentCardProps {
  name: string,
  NIF: string,
  adress: string,
  phone: string,
  country: string,
  city: string,
  postalCode: string;
}

const BillmentCard: React.FC<BillmentCardProps> = ({
  name,
  NIF,
  adress,
  phone,
  country,
  city,
  postalCode
}) => {
  return (
    <>
      <div>
        {name}
      </div>
    </>
  )
}

export default BillmentCard
