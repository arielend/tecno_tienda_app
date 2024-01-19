import { createSlice } from "@reduxjs/toolkit"
import categoriesData from '../data/tecnotienda_catData.json'

export const shopSlice = createSlice({
    name: "shop",
    initialState:{
        categories: categoriesData,
        products: [],
        productsFilteredByCategory: [],
        productsFilteredBySearch: [],
        categorySelected: "",
        productIdSelected: null,
        productSelectedById: {}
    },
    reducers:{
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
        }
    }    
})

export const {
    setProducts,
    setCategorySelected,
    setProductIdSelected,
    setProductSelectedById,
    setProductsFilteredByCategory,
    setProductsFilteredBySearch } = shopSlice.actions

export default shopSlice.reducer