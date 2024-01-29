import { createSlice } from "@reduxjs/toolkit"

export const shopSlice = createSlice({
    name: "shop",
    initialState:{
        categories: [],
        products: [],
        productsFilteredByCategory: [],
        productsFilteredBySearch: [],
        categorySelected: "",
        productIdSelected: null,
        productSelectedById: {},
        userOrders: []
    },
    reducers:{
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload            
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload            
        },
        setProductSelectedById:(state, action) => {
            state.productSelectedById = state.products.find(p => p.id === action.payload)
        },
        setProductsFilteredByCategory: (state, action)=>{
            state.productsFilteredByCategory = state.products.filter(p => p.category === action.payload)
        },
        setProductsFilteredBySearch: (state, action) => {
            state.productsFilteredBySearch = productsData.filter(p =>p.name.toLowerCase().includes(action.payload.toLowerCase()))
        },
        updateUserOrders: (state, action) => {
            const ordersUpdated = action.payload
            state.userOrders = ordersUpdated
        }
    }    
})

export const {
    setCategories,
    setProducts,
    setCategorySelected,
    setProductIdSelected,
    setProductSelectedById,
    setProductsFilteredByCategory,
    setProductsFilteredBySearch,
    updateUserOrders } = shopSlice.actions

export default shopSlice.reducer