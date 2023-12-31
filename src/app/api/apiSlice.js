import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../feature/auth/authSlice'

const mode = process.env.REACT_APP_MODE
let baseUrl
if (mode === 'development') {
  baseUrl = 'http://localhost:3500'
} else {
  baseUrl = process.env.REACT_APP_API_URL
}

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    const state = getState()
    // console.log('State: ', state)
    // console.log('token from basequery: ', token)
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  // console.log(args) // request url, method, body
  // console.log(api) // signal, dispatch, getState()
  // console.log(extraOptions) //custom like {shout: true}

  let result = await baseQuery(args, api, extraOptions)

  // If you want, handle other status codes, too
  if (result?.error?.status === 403) {
    // console.log('sending refresh token')

    // send refresh token to get new access token 
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)

    if (refreshResult?.data) {

      // store the new token 
      api.dispatch(setCredentials({ ...refreshResult.data }))

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {

      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = "Your login has expired. "
      }
      return refreshResult
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Course'],
  keepUnusedDataFor: 3600000, // 1 hour cache time
  // refetchOnReconnect: true,
  endpoints: builder => ({})
})

export { baseUrl }