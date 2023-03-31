import Link from "next/link"
import { Button } from "react-bootstrap"
export const getStaticPaths = async()=>{
    const res = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=10")
    
    const data = await res.json()
    const paths =data.map(
        post=>{
           return{params :{id:post.id.toString()}} 
        }
    )
    return(
        {
            paths , fallback : false
        }
    )
}
export const getStaticProps = async(context)=>{
    const id = context.params.id
    const res = await fetch("http://jsonplaceholder.typicode.com/posts/"+id)
    
    const data = await res.json()
return {
    props:{post:data}
}
}

const Post = ({post}) => {

    return (
        <div className="card">
            <div className="card-header">{post.title}</div>
            <div className="card-body">{post.body}</div>
            <div className="card-footer"><Button>
                <Link className="text-light text-decoration-none" href="/movies">Go Back</Link></Button></div>
        </div>
     );
}
 
export default Post;