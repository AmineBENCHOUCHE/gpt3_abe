import React from 'react'
import './article.css'



const Article = ({date, title, subtitle, image}) => {
  
  return (
        <div className='gpt3__article'>
          <img src={image} alt="" />
          <div className='gpt3__article-description'>
            <h5>{date}</h5>
            <h4>{title}</h4>
            <h5>{subtitle="Read Full Article"}</h5>
          </div>
        </div>
  )

}

export default Article
