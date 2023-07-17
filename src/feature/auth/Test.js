import { useTestQuery } from "./authApiSlice"


const Test = () => {


  const testData = useTestQuery()

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useTestQuery('notesList')

  console.log('testData: ', testData)
  const content = (
    <div>
      <h1>{data}</h1>
    </div>
  )


  return content
}

export default Test