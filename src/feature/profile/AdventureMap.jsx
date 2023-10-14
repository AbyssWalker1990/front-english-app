import React from 'react'
import { useGetProfileQuery } from './profileApiSlice'
import { useGetCoursesQuery } from '../courses/courseApiSlice'

const AdventureMap = () => {
  const { data: profileData, isSuccess: isProfileSuccess } =
    useGetProfileQuery()

  const { data: courses, isSuccess: isCoursesSuccess } = useGetCoursesQuery()

  const positions = new Map([
    [0, { top: '76%', left: '4.5%' }],
    [1, { top: '78%', left: '22%' }],
    [2, { top: '79%', left: '43%' }],
    [3, { top: '85%', left: '65%' }],
    [4, { top: '80%', left: '80%' }],
    [5, { top: '63%', left: '78%' }],
    [6, { top: '64%', left: '59%' }],
    [7, { top: '69%', left: '42%' }],
    [8, { top: '50%', left: '49%' }],
    [9, { top: '38%', left: '46%' }],
    [10, { top: '44%', left: '32%' }],
    [11, { top: '38%', left: '18%' }],
    [12, { top: '29%', left: '21%' }],
    [13, { top: '12%', left: '34%' }],
    [14, { top: '18%', left: '49%' }],
    [15, { top: '41%', left: '70%' }],
    [16, { top: '23%', left: '84%' }],
  ])

  let content

  if (isProfileSuccess && isCoursesSuccess) {
    const currentCourseTitle = profileData.activeCourse
    console.log('currentCourseTitle: ', currentCourseTitle)

    const allCoursesIds = Array.from(Object.keys(courses.entities))
    let currentCourseId
    for (const courseId of allCoursesIds) {
      if (courses.entities[courseId].title === currentCourseTitle) {
        currentCourseId = courses.entities[courseId]._id
        break
      }
    }

    const results = profileData.coursesAnswers[0].courseResults
    const successfullyPassedLessons = results.filter(
      (result) => result.lessonResultPercent >= 80
    )
    content = (
      <section id='map-section'>
        <article id='map'>
          <img src='../img/map_female.jpg' alt='map' />
          <img
            style={{
              top: positions.get(successfullyPassedLessons.length).top,
              left: positions.get(successfullyPassedLessons.length).left,
            }}
            className='character'
            src='../img/characters/female_level1.png'
            alt='character'
          />
        </article>
      </section>
    )
  }

  return content || <h1>Error</h1>
}

export default AdventureMap
