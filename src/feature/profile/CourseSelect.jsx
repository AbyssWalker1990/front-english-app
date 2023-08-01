

const CourseSelect = ({ coursesList, handleCourse },) => {



  const courseOptions = coursesList.map(course => (
    <option key={course} value={course}>{course}</option>
  ))

  return (
    <>
      <label htmlFor="course"><span className="nowrap">Choose course:&nbsp;&nbsp;&nbsp;</span></label>
      <select onChange={handleCourse} name="course" id="course">
        {courseOptions}
      </select>
    </>
  )
}

export default CourseSelect