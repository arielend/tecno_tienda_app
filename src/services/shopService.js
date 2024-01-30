import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const base_url = process.env.EXPO_PUBLIC_BASE_URL

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getProductById: builder.query({
            query: (id) => `products.json?orderBy="id"&equalTo="${id}"`
        }),        
        getUserOrders: builder.query({
            query: (localId) => `orders/${localId}.json`
        }),
        putOrder: builder.mutation({
            query: ({localId, ordersUpdated}) => ({
                url: `orders/${localId}.json`,
                method: 'PUT',
                body: ordersUpdated
            })
        })
    })
})

export const { useGetCategoriesQuery,
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery,
    usePutOrderMutation,
    useGetUserOrdersQuery } = shopApi