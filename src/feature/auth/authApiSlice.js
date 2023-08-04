import { apiSlice } from "../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted (arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(logOut())
          dispatch(apiSlice.util.resetApiState())
        } catch (err) {
          console.log(err)
        }
      }
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET',
      }),
      async onQueryStarted (arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          const { accessToken } = data
          dispatch(setCredentials({ accessToken }))
        } catch (error) {
          console.log(error)
        }
      }
    }),
    register: builder.mutation({
      query: initialUserData => ({
        url: '/auth/register',
        method: 'POST',
        body: {
          ...initialUserData,
        }
      }),
    }),
    test: builder.query({
      query: () => ({
        url: '/test',
        method: 'GET',
      }),
      async onQueryStarted (arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
        } catch (err) {
          if (err.status = 401) console.log(444000111)
        }
      }
    })
  })
})

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useRefreshMutation,
  useRegisterMutation,
  useTestQuery,
} = authApiSlice 