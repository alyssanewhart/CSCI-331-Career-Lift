import styles from "./share.module.css"
import {PermMedia, Label,Room,Attachment, Cancel } from "@material-ui/icons"
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

export default function Share() {

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null)

  const submitHandler =  async (e) =>{

     e.preventDefault();
      const newPost  = {
         userId: user._id, 
         desc: desc.current.value
     }

     if(file){
         const data = new FormData();
         const fileName =  Date.now()+file.name;
         data.append("file", file);
         data.append("name", fileName)
         newPost.img =fileName;
         try{
             await axios.post("/upload", data)
         }catch(err){
             console.log(err)
         }
     }

     try{
         await axios.post("/posts", newPost)
         //post context to upload state.
         window.location.reload()

     }catch(err){

     }
    
    
  }


  //share button controller
  const[state, setState] = useState(true)
  const buttonDisabled = (e) =>{ 
    if(e.target.value.length !== 0){
    setState(false);}
    else{
    setState(true);}
  };

    return (
        <div className={styles.share}>
            <div className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <img className={styles.shareProfileImg} 
                    src={user.profilePicture} alt="profile picture"/>
                    <input placeholder="Make a public post, connect with others." className={styles.shareInput} ref={desc}  onChange={buttonDisabled}/>
                     
                </div>
                <hr className={styles.shareHr}/>
                { file && (
                    <div className={styles.shareImgContainer}>
                        <img clssName={styles.shareImg} src={URL.createObjectURL(file)} alt=""/>
                        <Cancel className={styles.shareCancelImg} onClick={() => setFile(null)}/> 
                    </div>    

                )}
                <form className={styles.shareBottom} onSubmit={submitHandler}>
                    <div className={styles.shareOptions}>
                        <label htmlFor="file" className={styles.shareOption}>
                             <PermMedia className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>Photo or Video</span>
                             <input style={{display:"none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className={styles.shareOption}>
                             <Label className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>Tag</span>
                        </div>
                        <div className={styles.shareOption}>
                             <Room className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>Location</span>
                        </div>
                        <div className={styles.shareOption}>
                             <Attachment className={styles.shareIcon}/>
                             <span className={styles.shareOptionText}>File</span>
                        </div>
                    </div>
                    <button type="submit" className={styles.shareButton} disabled={state}>Share</button>
                </form>
            </div>
            
        </div>
    )
}
