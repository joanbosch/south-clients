import ProductCard from '@/components/ProductCard'

async function getProducts () {
  console.log(`${process.env.API_URL}/api/products`)
  const res = await fetch(`${process.env.API_URL}/api/products`, {
    next: { revalidate: 10 },
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

export default async function Dashboard () {
  const products = await getProducts()
  return (
    <main>
      <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
        <div className='p-4 flex flex-wrap gap-4'>
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
