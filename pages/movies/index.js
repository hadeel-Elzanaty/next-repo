import React, { useState } from 'react'
import {AiFillDelete} from "react-icons/ai"
import { Button } from 'react-bootstrap'
import Link from 'next/link'

export const getStaticProps=async()=>{
    const res =await fetch("http://jsonplaceholder.typicode.com/posts?_limit=10")
    const data = await res.json();
    
    return    {props:{posts:data}}
    
} 

const Movies = ({posts}) => {
  const[state,setState]=useState(posts)
  
const handleDelete=(id)=>{
  
}

  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">desc</th>
        <th scope="col">delete</th>
      </tr>
    </thead>
    <tbody>
   {
    state.map(
      post=>(
       <tr key={post.id}>
         <th scope="row">{post.id}</th>
        <td>{post.title.substr(0,15)}</td>
        <td>{post.body.substr(0,30)}</td>
        <td><Button  variant="dark" >
        <Link className='text-white text-decoration-none' href={`/movies/${post.id}`}>
          Details</Link>
          </Button>
          </td>
        <td><Button onClick={()=>{
          handleDelete(post.id)
        }} variant="light">
        <AiFillDelete className='text-danger text-center'/>
          </Button></td>
      
       </tr>
      )
    )
   }
    </tbody>
  </table>
  )
}

export default Movies