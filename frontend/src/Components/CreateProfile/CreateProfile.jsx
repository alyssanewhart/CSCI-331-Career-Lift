import React, {useState} from "react";
import styles from './CreateProfile.module.css';
import {Container, Row, Col, Card, Form, Button }from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../Images/CareerLift_LogoDraft2.png';
import { useHistory } from "react-router";
import Topbar from "../profileTopbar/Topbar"
// import UserDataService from "../../services/users.js";
import axios from "axios";


const CreateProfile = ({user}) => {
    //console.log(user)

    const [selectedImage, setSelectedImage] = useState(null);
    const history = useHistory()

    const [defaultImage, setDefaultImage] = useState(user.user.profilePicture);
    console.log(user.user.profilePicture)
   
    console.log(user.user.name)
   // console.log(defaultImage)

    function updateProfileImg(e) {
         e.preventDefault();
        console.log("selected image printed")
        console.log(selectedImage)


        const data = new FormData()
        data.append('myFile', selectedImage)
        data.append('user_id', user.user._id)

      const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    console.log(" Form Data ")
    for (var key of data.entries()) {
        console.log(key[0] + ', ' + key[1]);

    }

    console.log("config")
    console.log(config)

    axios.post("http://localhost:8800/api/file/upload", data, config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });  

    

    


   /*   axios.post('http://localhost:8800/api/users/profilepicture', data)
      .then(res => {
        console.log(res);
        console.log({name: res.data.name, path: 'http://localhost:8800/api/users' + res.data.path})
      })
      .catch(err => console.log(err)) */
      
    /* UserDataService.updateProfilePicture(data)
        .then(response => {
          console.log("response")
          console.log(response)
        })
        .catch(e => {
            console.log(e)
        }); */
    }
        
   
  
    
      return (
        <div>
          <h1>Profile Picture</h1>

        {selectedImage && (
            <div>
            <img alt="not fount" width={"150px"} height={"150px"}src={URL.createObjectURL(selectedImage)} id={styles.profileimage}/>
            <br />
            <b>Name:</b> {user.user.name} &nbsp;
            <b>User Type:</b> {user.user.userType}
           {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
            </div>
          )}

{defaultImage && (
            <div>
            <img alt="not fount" width={"150px"} height={"150px"}src={defaultImage} id={styles.profileimage}/>
            <br />
            <b>Name:</b> {user.user.name} &nbsp;
            <b>User Type:</b> {user.user.userType}
           {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
           </div>
          )} 

         
           
          

        
     
          <br />
          <input
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(null);           // clear previous photo
              setSelectedImage(event.target.files[0]);
           //   setDefaultImage(null);
              updateProfileImg(event);
            }}
          />



          <div id={styles.CreateProfileWrapper}>
          {/*}  <Card>
                            <Container>
                                <Row>
                                    <Col> 
                                        <b>Name:</b> {user.user_data.name}
                                    </Col>
                                    <Col> 
                                        <b>User Type:</b> {user.user_data.userType}
                                     </Col>
                                </Row>
                            </Container>
          </Card> */}

          
                </div> 
         
          <br /> 
         
        </div>
      )

};
export default CreateProfile