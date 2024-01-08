import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        user: 'testUser',
        lastUpdate: Date.now().toLocaleString(),
        totalBudget: 0,
        items: []
    },
    reducers:{
        addItemToCart: (state, action) => {
            const isInCart = state.items.find(i => i.id === action.payload.id)
            if(!isInCart){
                state.items.push(action.payload)
                const total = state.items.reduce(
                    (acc, current) => acc += current.price*current.quantity, 0
                )
                state.totalBudget = total
                state = {
                    ...state,
                    totalBudget: total,
                    lastUpdate: Date.now().toLocaleString()
                }
            }else{
                const itemsUpdated = state.items.map(item=>{
                    if(item.id === action.payload.id){
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdated.reduce(
                    (acc, current) => acc += current.price*current.quantity,0
                )
                state.totalBudget = total
                state = {
                    ...state,
                    items: itemsUpdated,
                    totalBudget: total,
                    lastUpdate: Date.now().toLocaleString()
                }                
            }
            console.log(`El estado del carrito en cartSlice, luego de agregar tiene ${state.items.length} elementos`);
        },
        removeItemFromCart: (state, action) =>{
            console.log("Hay que eliminar el item con id", action.payload);
            const itemsUpdated = state.items.filter(i => i.id !== action.payload)
            const total = itemsUpdated.reduce(
                (acc, current) => acc += current.price*current.quantity, 0
            )
            state.totalBudget = total
            state = {
                ...state,
                items: itemsUpdated,
                totalBudget: total,
                lastUpdate: Date.now().toLocaleString()
            }
            console.log(`El estado del carrito en cartSlice, luego de eliminar tiene ${state.items.length} elementos`);
        },
        clearCart: (state) =>{
            state.items = []
        }
    }
})

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer