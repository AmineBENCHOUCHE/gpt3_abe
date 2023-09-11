import React from 'react'
import './article.css'



const Article = ({date, title, subtitle, image}) => {
  
  return (
        <div className='gpt3__article'>
          <img src={image} alt="blog" />
          <div className='gpt3__article-description'>
            <h5>{date}</h5>
            <h3>{title}</h3>
          </div>
            <p>{subtitle="Read Full Article"}</p>
        </div>
  )

}

export default Article
