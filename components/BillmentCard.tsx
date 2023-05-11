import React from 'react'

interface BillmentCardProps {
  name: string,
  NIF: string,
  adress: string,
  phone: string,
  country: string,
  city: string,
  postalCode: string,
  selected?: boolean,
  onChange?: (event:any) => void;
}

const BillmentCard: React.FC<BillmentCardProps> = ({
  name,
  NIF,
  adress,
  phone,
  country,
  city,
  postalCode,
  selected,
  onChange
}) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center mx-auto lg:py-0' onClick={onChange}>
        <div className={`w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-southDarkBrown-800 ${selected ? 'border-b-neutral-800' : 'border-transparent'}'`}>
          <div className='p-6  sm:p-4'>
            <div>
              Cliente: {name}
            </div>
            <div>
              NIF: {NIF}
            </div>
            <div>
              Dirección: {adress}
            </div>
            <div>
              Ciudad: {city}
            </div>
            <div>
              Codigo Postal: {postalCode}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillmentCard
