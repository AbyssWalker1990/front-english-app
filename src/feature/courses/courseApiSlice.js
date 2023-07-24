import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"
import initialCourseData from "../../config/initialCourseData";

const courseAdapter = createEntityAdapter({})

const initialState = courseAdapter.getInitialState()

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCourses: builder.query({
      query: () => '/courses',
      keepUnusedDataFor: 3600000, // 1 hour cache time
      validateSatatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      refetchOnMountOrArgChange: true,
      transformResponse: responseData => {
        const loadedCourses = responseData.courses.map(course => {
          course.id = course._id
          return course
        })
        return courseAdapter.setAll(initialState, loadedCourses)
      },
      providedTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Course', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Course', id }))
          ]
        } else return [{ type: 'Course', id: 'LIST' }]
      }
    }),
    addNewCourse: builder.mutation({
      query: () => ({
        url: '/courses',
        method: 'POST',
        body: {
          ...initialCourseData
        }
      }),
      invalidatesTags: [
        { type: 'Course', id: 'LIST' }
      ]
    })
  })
})

export const {
  useGetCoursesQuery,
  useAddNewCourseMutation
} = courseApiSlice

export const selectCourseResult = courseApiSlice.endpoints.getCourses.select()

const selectCoursesData = createSelector(
  selectCourseResult,
  coursesResult => coursesResult.data
)

export const {
  selectAll: selectAllCourses,
  selectById: selectCourseById,
  selectIds: selectCoursesIds
} = courseAdapter.getSelectors(state => selectCoursesData(state) ?? initialState)