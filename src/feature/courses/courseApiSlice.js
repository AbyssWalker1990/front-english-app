import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

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
        body: {}
      }),
      invalidatesTags: [
        { type: 'Course', id: 'LIST' }
      ]
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Course', id: arg.id }
      ]
    }),
    updateCourse: builder.mutation({
      query: curCourse => ({
        url: `/courses/${curCourse._id}`,
        method: 'PATCH',
        body: {
          ...curCourse
        }
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Course', id: arg.id },
        { type: 'Course', id: 'LIST' }
      ]
    }),
  })
})

export const {
  useGetCoursesQuery,
  useAddNewCourseMutation,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
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