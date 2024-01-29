import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const base_url = process.env.EXPO_PUBLIC_BASE_URL

export const userProfileApi = createApi({
    reducerPath: "userProfileApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        putProfilePicture: builder.mutation({
            query: ({image, localId}) =>({
                url: `profilePictures/${localId}.json`,
                method: 'PUT',
                body: {image}
            })
        }),
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json`,
        }),
        getFavoriteItems: builder.query({
            query: (localId) => `favoriteItems/${localId}.json`,
        }),
        putFavoriteItems: builder.mutation({
            query: ({favsUpdated, localId}) => ({
                url: `favoriteItems/${localId}.json`,
                method: 'PUT',
                body: favsUpdated
            })
        }),
        getFavoriteItems: builder.query({
            query: (localId) => `favoriteItems/${localId}.json`
        }),
        putUserAddress: builder.mutation({
            query: ({userAddress, localId}) =>({
                url: `userAddress/${localId}.json`,
                method: 'PUT',
                body: userAddress
            })
        }),
        getUserAddress: builder.query({
            query: (localId) => `userAddress/${localId}.json`            
        })
    })
})

export const { usePutProfilePictureMutation, useGetProfilePictureQuery, useGetFavoriteItemsQuery, usePutFavoriteItemsMutation, useGetUserAddressQuery, usePutUserAddressMutation } = userProfileApi