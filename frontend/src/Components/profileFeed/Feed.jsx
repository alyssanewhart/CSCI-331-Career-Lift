import styles from"./feed.module.css"
import Share from "./Share/Share"
import Post from "./Post/Post"
import { useContext, useEffect, useState } from "react"
//import { Posts } from "../../dummyData"
import axios from "axios"



const Feed = ({user, name }) => //
{

    const [posts, setPosts] = useState([]);
   
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
            {(!name || name === user.name )&& <Share user = {user}/> }
               {posts.map((p) => (
          <Post key={p._id} post={p} user={user} />
        ))}
           </div>
        </div>
    )
}
export default Feed;