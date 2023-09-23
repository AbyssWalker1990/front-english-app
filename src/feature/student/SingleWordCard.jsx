const SingleWordCard = ({ card }) => {
  const { english, ukrainian } = card
  return (
    <article className='wordCard'>
      <p className='englishWord'>{english}</p>
    </article>
  )
}

export default SingleWordCard
