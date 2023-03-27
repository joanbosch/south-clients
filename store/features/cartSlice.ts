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

export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((el: any) => el.product.id === productId)?.quantity
)

export const totalCartItemsSelector = createSelector(
  [cartItems],
  (cartItems) =>
    cartItems.reduce(
      (total: number, curr: CartItem) =>
        (total += curr.quantity),
      0
    )
)
export const TotalPriceSelector = createSelector(
  [cartItems],
  (cartItems) =>
    cartItems.reduce(
      (total: number, curr: CartItem) =>
        (total += curr.quantity * curr.product.price),
      0
    )
)

export const CartItems = createSelector(
  [cartItems],
  (cartItems: CartItem[]) =>
    cartItems
)

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer
