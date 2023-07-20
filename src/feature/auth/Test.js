import { useTestQuery } from "./authApiSlice"
import { useNavigate } from 'react-router-dom';



const Test = () => {

  const navigate = useNavigate()

  const {
    data: testText,
    isLoading,
    isSuccess,
    isError,
    error
  } = useTestQuery()

  if (isSuccess) {
    console.log('testData: ', testText)
  } else if (isError) {
    navigate('/login')
  }

  const strData = JSON.stringify(testText)
  const content = (
    <div>
      <h1>{strData}</h1>
    </div>
  )


  return content
}

export default Test