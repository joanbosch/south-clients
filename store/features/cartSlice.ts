import { CartItem, Product } from 'interfaces'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  cartItems: CartItem[]
}

const initialState: CartState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state: any, action: PayloadAction<Product>) => {
      const item = action.payload
      const existItem = state.cartItems.find((element:any) => element.product.id === item.id)
      if (existItem) {
        existItem.quantity++
      } else {
        state.cartItems.push({ product: item, quantity: 1 })
      }
    },
    decrement: (state: any, action: PayloadAction<Product>) => {
      const existItem = state.cartItems.find((element:any) => element.product.id === action.payload.id)
      if (existItem) {
        existItem.quantity--
        if (existItem.quantity === 0) {
          state.cartItems = state.cartItems.filter((element:any) => element.product.id !== action.payload.id)
        }
      }
    }
  }
})

const cartItems = (state: any) => state.cart.cartItems
export const totalCartItemSelector = createSelector([cartItems], (cartItems) => {
  return cartItems.reduce((total: number, curr: CartItem) => total + curr.quantity, 0)
})

export const productQuantitySelector = createSelector([cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) => {
    // eslint-disable-next-line no-unused-expressions
    cartItems.find((element:any) => element.product.id === productId)?.quantity
  }
)

export const totalCartPriceSelector = createSelector([cartItems], (cartItems) => {
  // eslint-disable-next-line no-return-assign
  return cartItems.reduce((total: number, curr: CartItem) => (total += curr.product.price * curr.quantity), 0)
})

export const producQuantitySelector = (productId: number) => createSelector([cartItems], (cartItems) => {
  const item = cartItems.find((element:any) => element.product.id === productId)
  return item ? item.quantity : 0
})

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer
