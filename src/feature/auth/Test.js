import { useTestQuery } from "./authApiSlice"


const Test = () => {

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
    console.log('Error')
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