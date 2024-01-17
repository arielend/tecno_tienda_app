import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/database'

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
        })
    })
})

export const { usePutProfilePictureMutation, useGetProfilePictureQuery, useGetFavoriteItemsQuery, usePutFavoriteItemsMutation } = userProfileApi