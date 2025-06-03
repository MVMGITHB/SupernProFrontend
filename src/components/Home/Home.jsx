"use client"
import  { useEffect, useState } from 'react'

import NewsLayout from './NewsLayout'
import Summary from './Summary'
import { base_url } from '../Helper/helper'
import axios from 'axios'
export const Home = () => {

  const [blog, setBlog] = useState()

  const fetchBlog=async ()=>{
    const response= await axios.get(`${base_url}/api/blog/getAllBlog`)
    const data=response.data
    setBlog(data)
  }

  useEffect(()=>{
    fetchBlog()
  },[])
  return (
    <div>
      

     <NewsLayout blog={blog}/>
     <Summary blog={blog}/>
    </div>
   
  )
}
