import React,{useEffect,useState}from 'react'
import axios  from 'axios'
import { API } from './config'

const Posts = () => {
    const[posts,setPost]=useState([])

    useEffect(()=>{
        axios.get(`${API}/posts`)
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      {posts.map((item,i)=>(
        <div key={i}>
        <h1>Title:{item.title}</h1>
        <p>URL:{item.url}</p>
        
        </div>
      ))}
    </div>
  )
}

export default Posts
