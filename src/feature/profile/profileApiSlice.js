import { apiSlice } from "../../app/api/apiSlice"


export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    setAvatar: builder.mutation({
      query: img => ({
        url: 'profile/set-avatar',
        method: 'POST',
        body: { img },
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    }),
    createProfile: builder.mutation({
      query: profileData => ({
        url: '/profile',
        method: 'POST',
        body: { ...profileData }
      })
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/profile',
        method: 'GET'
      })
    }),
    setBlockAnswers: builder.mutation({
      query: data => ({
        url: '/profile/answers',
        method: 'PATCH',
        body: { ...data }
      })
    }),
    setInitAnswers: builder.mutation({
      query: data => ({
        url: '/profile/init-answers',
        method: 'POST',
        body: { ...data }
      })
    })
  })
})

export const {
  useSetAvatarMutation,
  useCreateProfileMutation,
  useGetProfileQuery,
  useSetBlockAnswersMutation,
  useSetInitAnswersMutation
} = profileApiSlice