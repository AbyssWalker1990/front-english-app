import { useRef } from 'react'

const SingleWordCard = ({ card }) => {
  const { english, ukrainian } = card

  const engRef = useRef()
  const ukrRef = useRef()

  const revealTranslation = () => {
    engRef.current.className = 'hidden'
    ukrRef.current.className = ''
    setTimeout(() => {
      engRef.current.className = ''
      ukrRef.current.className = 'hidden'
    }, 5000)
  }

  return (
    <article className='wordCard' onClick={revealTranslation}>
      <p ref={engRef}>{english}</p>
      <p ref={ukrRef} className='hidden'>
        {ukrainian}
      </p>
    </article>
  )
}

export default SingleWordCard
