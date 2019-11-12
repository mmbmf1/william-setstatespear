import React from 'react'
import POEMS from './poems'

export default function PoemPage(props) {
  // console.log(props);
  const poem = POEMS.find(p =>
    p.id === props.match.params.poemId
  )
  console.log(props)//where does this come from?
  console.log(POEMS)
  console.log(poem)
  return (
    <article className='Poem'>
      <h2>{poem.title}</h2>
      {poem.content.map((p, i) =>
        (p === '')
          ? <br key={i} />
          : <p key={i}>{p}</p>
      )}
    </article>
  )
}
