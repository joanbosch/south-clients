export interface Product{
  id: number
  name: string
  price: number
  img1: string
  img2: string
  img3: string
  img4: string
}

export interface CartItem{
  product: Product,
  quantity: number,
}
