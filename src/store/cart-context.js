import React, { useReducer } from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {}
})
const initState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    let updatedItems = [...state.items]
    if(action.type === 'ADD_CART') {
        const totalAmount = state.totalAmount + action.item.price * action.item.amount
        const exsitingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const exsitingItem = state.items[exsitingItemIndex]
        if(exsitingItem) {
            const updatedItem = {
                ...exsitingItem,
                amount: exsitingItem.amount + action.item.amount
            }
            updatedItems[exsitingItemIndex] = updatedItem
        } else {
            updatedItems = updatedItems.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: totalAmount
        }
    } else if(action.type === 'REMOVE_CART') {
        const exsitingItemIndex = state.items.findIndex(item => item.id === action.id)
        const exsitingItem = state.items[exsitingItemIndex]
        const totalAmount = state.totalAmount - exsitingItem.price
        if(exsitingItem.amount === 1) {
            updatedItems = updatedItems.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {
                ...exsitingItem,
                amount: exsitingItem.amount - 1
            }
            updatedItems[exsitingItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: totalAmount
        }
    }
}

export const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, initState)

    const addItemHandler = (item) => {
        dispatchCartState({type: 'ADD_CART', item: item})
    }
    const removeItemHandler = (id) => {
        dispatchCartState({type: 'REMOVE_CART', id: id})
    }
    const values = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext