import { apiSlice } from "../../app/api/apiSlice"
import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";

const courseAdapter = createEntityAdapter({})

const initialState = courseAdapter.getInitialState()


export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCourses: builder.query({
      query: () => ({
        url: '/courses'
      }),
      transformResponse: responseData => {
        const loadedUsers = responseData.courses.map(user => {
          user.id = user._id
          return user
        })
        return courseAdapter.setAll(initialState, loadedUsers)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Course', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Course', id }))
          ]
        } else return [{ type: 'Course', id: 'LIST' }]
      }
    }),
  })
})

export const {
  useGetCoursesQuery
} = courseApiSlice

export const {
  selectAll: selectAllCourses,
  selectById: selectCourseById,
  selectIds: selectCourseIds
  // Pass in a selector that returns the users slice of state
} = courseAdapter.getSelectors()