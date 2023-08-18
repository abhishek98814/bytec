
import React from 'react'
import './css/blog.css'
import BlogCard from '../card/BlogCard'

export default function Blog() {
  return (
    <>
    <div className="container-fluid blog">
    <button className="btn btn-lg text-dak">Blog</button>
    <div className="inputBox">
        <input type="text" className='form fs-4' placeholder='Search' />
    </div>
    </div>
    <BlogCard />
    </>
    )
}
