import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01, blog02,blog03,blog04,blog05} from "./import"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog"> 
      <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      <div className="gpt3__blog_images">
        <div className='gpt3__blog_images_image1'> 
          <Article  title={"GPT-3 and Open AI is the future. Let us explore how it is?"} date={"30 September 2021"} image={blog01}/>
        </div>
        <div className='gpt3__blog_images_image2'>
          <Article  title={"GPT-3 and Open AI is the future. Let us explore how it is?"} date={"30 September 2021"} image={blog02}/>
        </div>

        <div className='gpt3__blog_images_image3'>
          <Article  title={"GPT-3 and Open AI is the future. Let us explore how it is?"} date={"30 September 2021"} image={blog03}/>
        </div>
        <div className='gpt3__blog_images_image4'>
          <Article  title={"GPT-3 and Open AI is the future. Let us explore how it is?"} date={"30 September 2021"} image={blog04}/>
        </div >
        <div className='gpt3__blog_images_image5'>
          <Article  title={"GPT-3 and Open AI is the future. Let us explore how it is?"} date={"30 September 2021"} image={blog05}/>
        </div>
        
      </div>
    </div>
  )
}

export default Blog
