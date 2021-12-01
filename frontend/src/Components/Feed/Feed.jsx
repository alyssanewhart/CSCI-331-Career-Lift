import styles from"./feed.module.css"
import Share from "./Share/Share"
import Post from "./Post/Post"
import { useContext, useEffect, useState } from "react"
//import { Posts } from "../../dummyData"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"



export default function Feed({ name }) //
{

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // because we can't use await in useEffects hook
        // neeed a separate function
        const fetchPosts =  async () => {
           
             const res = name 
                    ? await axios.get("/posts/UserProfile/"+ name)
                    //
                    //Add User ID
                    //
                    : await axios.get("/posts/feed/"+user._id);
             setPosts(res.data.sort((x1, x2) => {
                 return new Date(x2.createdAt) - new Date(x1.createdAt);
             }))
            //console.log(res);
        };

        fetchPosts();      
    }, [name, user._id]);



    return (
        <div className={styles.feed}>
           <div className={styles.feedWrapper}>
            {(!name || name === user.name )&& <Share/> }
               {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
           </div>
        </div>
    )
}
