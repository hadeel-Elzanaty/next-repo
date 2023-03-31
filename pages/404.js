import Link from 'next/link'
import React from 'react'
import {Button} from"react-bootstrap"

const NotFound = () => {
  return (
    <>
    <div className='m-3'>NotFound</div>
    <Button className='ms-3' variant="dark">
    <Link className="text-light text-decoration-none"href="/">go home</Link>
    </Button>
    </>
  )
}

export default NotFound