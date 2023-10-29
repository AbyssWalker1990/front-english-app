import React from 'react'
import { useGetProfileQuery } from './profileApiSlice'

const AdventureMap = () => {
  const { data: profileData, isSuccess: isProfileSuccess } =
    useGetProfileQuery()

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
    [17, { top: '23%', left: '84%' }],
    [18, { top: '23%', left: '84%' }],
    [19, { top: '23%', left: '84%' }],
  ])

  let content

  if (isProfileSuccess) {
    const results = profileData.coursesAnswers[0].courseResults
    const successfullyPassedLessons = results.filter(
      (result) => result.lessonResultPercent >= 80
    )

    const gender = profileData.gender ?? 'male'

    console.log(successfullyPassedLessons.length)

    let level
    let mapImg
    switch (successfullyPassedLessons.length) {
      case 0:
      case 1:
        level = '1'
        break
      case 2:
      case 3:
      case 4:
        level = '2'
        break
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        level = '3'
        break
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
        level = '4'
        break
      case 15:
      case 16:
        level = '5'
        break
      default:
        level = '5'
        break
    }

    console.log('level:', level)
    switch (level) {
      case '1':
        mapImg = 'map-0.jpg'
        break
      case '2':
        mapImg = 'map-2.jpg'
        break
      case '3':
        mapImg = 'map-3.jpg'
        break
      case '4':
        mapImg = 'map-4.jpg'
        break
      case '5':
        mapImg = 'map-5.jpg'
        break
      default:
        mapImg = 'map-0.jpg'
        break
    }

    if (
      successfullyPassedLessons.length > 15 &&
      successfullyPassedLessons.length < 17
    ) {
      mapImg = 'map-6.jpg'
    } else if (successfullyPassedLessons.length >= 17) {
      mapImg = 'map-7.jpg'
    }

    const characterURL = `../img/characters/${gender}_level${level}.png`

    content = (
      <section id='map-section'>
        <article id='map'>
          <img src={`../img/map/${mapImg}`} alt='map' />
          <img
            src={characterURL}
            style={{
              top: positions.get(successfullyPassedLessons.length).top,
              left: positions.get(successfullyPassedLessons.length).left,
            }}
            className='character'
            alt='character'
          />
        </article>
      </section>
    )
  }

  return content || <h1>Error</h1>
}

export default AdventureMap
