import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const base_auth_url = process.env.EXPO_PUBLIC_BASE_AUTH_URL
const api_key = process.env.EXPO_PUBLIC_API_KEY

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl:base_auth_url}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: ({...userData}) => ({
                url: `accounts:signUp?key=${api_key}`,
                method: 'POST',
                body: userData
            }),
        }),
        login: builder.mutation({
            query: ({...userData}) => ({
                url: `accounts:signInWithPassword?key=${api_key}`,
                method: 'POST',
                body: userData
            })
        })
    })
})

export const { useSignupMutation, useLoginMutation } = authApi