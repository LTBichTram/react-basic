import React, { useReducer } from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
})

const initCart = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    let updatedItems = [...state.items]
    if(action.type === 'ADD_CART') {
        const totalAmount = +((state.totalAmount + action.item.price * action.item.amount).toFixed(2))
        const existingCartIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCart = state.items[existingCartIndex]
        if(existingCart) {
            const updatedItem = {
                ...existingCart,
                amount: existingCart.amount + action.item.amount
            }
            updatedItems[existingCartIndex] = updatedItem
        } else {
            updatedItems = updatedItems.concat(action.item)
        }
        return ({
            items: updatedItems,
            totalAmount: totalAmount
        })
    } else if(action.type === 'REMOVE_CART') {
        const existingCartIndex = state.items.findIndex(item => item.id === action.id)
        const existingCart = state.items[existingCartIndex]
        const totalAmount = +((state.totalAmount - existingCart.price).toFixed(2))
        if(existingCart.amount === 1) {
            updatedItems = updatedItems.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {
                ...existingCart,
                amount: existingCart.amount - 1
            }
            updatedItems[existingCartIndex] = updatedItem
        }
        return ({
            items: updatedItems,
            totalAmount: totalAmount
        })
    } else if(action.type === 'CLEAR_CART') {
        return initCart
    }
    
}

export const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initCart)
    const addItemHandler = item => {
        dispatchCart({type: 'ADD_CART', item: item})
    }
    const removeItemHandler = id => {
        dispatchCart({type: 'REMOVE_CART', id: id})
    }
    const clearCartHandler = () => {
        dispatchCart({type: 'CLEAR_CART'})
    }
    const values= {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
    }

    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext