import { apiSlice } from "../../app/api/apiSlice"


export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createProfile: builder.mutation({
      query: profileData => ({
        url: '/profile',
        method: 'POST',
        body: { ...profileData }
      })
    }),
  })
})

export const {
  useCreateProfileMutation
} = profileApiSlice