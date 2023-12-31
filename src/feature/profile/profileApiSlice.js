import { apiSlice } from '../../app/api/apiSlice'

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    setAvatar: builder.mutation({
      query: (img) => ({
        url: 'profile/set-avatar',
        method: 'POST',
        body: { img },
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    }),
    createProfile: builder.mutation({
      query: (profileData) => ({
        url: '/profile',
        method: 'POST',
        body: { ...profileData },
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
    }),
    setBlockAnswers: builder.mutation({
      query: (data) => ({
        url: '/profile/answers',
        method: 'PATCH',
        body: { ...data },
      }),
    }),
    calculateLessonResult: builder.mutation({
      query: (lessonData) => ({
        url: `/profile/calc-lesson`,
        method: 'POST',
        body: { ...lessonData },
      }),
    }),
    addAndSetActiveCourse: builder.mutation({
      query: (purchaseData) => ({
        url: `/profile/set-course`,
        method: 'POST',
        body: { ...purchaseData },
      }),
    }),
    addSuccessRecord: builder.mutation({
      query: (successRecord) => ({
        url: `/profile/success-diary`,
        method: 'POST',
        body: { ...successRecord },
      }),
    }),
  }),
})

export const {
  useSetAvatarMutation,
  useCreateProfileMutation,
  useGetProfileQuery,
  useSetBlockAnswersMutation,
  useCalculateLessonResultMutation,
  useAddAndSetActiveCourseMutation,
  useAddSuccessRecordMutation,
} = profileApiSlice
