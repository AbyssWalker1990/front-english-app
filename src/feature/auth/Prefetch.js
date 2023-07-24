import { store } from '../../app/store'
import { courseApiSlice } from '../courses/courseApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {

  useEffect(() => {
    store.dispatch(courseApiSlice.util.prefetch('getCourses', 'courseList', { force: true }))
  }, [])

  return <Outlet />
}
export default Prefetch
