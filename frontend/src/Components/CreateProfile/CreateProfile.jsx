import React, {useState, useEffect} from "react";
import styles from './CreateProfile.module.css';
import {Container, Row, Col, Card, Form, Button }from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../Images/CareerLift_LogoDraft2.png';
import { useHistory } from "react-router";
import Topbar from "../profileTopbar/Topbar"
// import UserDataService from "../../services/users.js";
import axios from "axios";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import UserDataService from "../../services/user";
import { ContactSupportOutlined } from "@material-ui/icons";


// recieve user from App.js
const CreateProfile = ({user, setUser}) => {

    console.log(user)
 
    const [selectedImage, setSelectedImage] = useState(null);
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [careerInterest, setCareerInterest] = useState("");
    const [classOf, setClassOf] = useState("");
    const [lookingFor, setLookingFor] = useState("");
    

    const history = useHistory()

    const [defaultImage, setDefaultImage] = useState(user.profilePicture);
  
    function updateProfileImg(e) {
        e.preventDefault();
        console.log("selected image printed")
        console.log(selectedImage)
        console.log(defaultImage)

        let data = new FormData()
        data.append("file", e.target.files[0])
        data.append("fileName", e.target.files[0].name);

       
  
      console.log(" Form Data ")
      for (var key of data.entries()) {
          console.log(key[0] + ', ' + key[1]);
  
      }
  
      axios.post("http://localhost:8800/api/file/upload", data)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
      });  
}

  
    // submit user's data to DB
    function submit(e) {
      e.preventDefault()

      // create data
      var data = {
        userId: user._id,
        jobTitle: jobTitle,
        careerInterest: careerInterest,
        company: company,
        lookingFor: lookingFor,
        classOf: classOf,
      }

      const url = `/${user._id}`;
      console.log(url)

      // call service to update user's information in the DB
      UserDataService.updateUser(url, data)
        .then(response => {
              console.log(response.data);
              if(response.data.status === "success") {
                
                // update user data
                setUser(response.data.user)
                // redirect to create profile page upon updating profile
                history.push("/UserProfile")
              }
            }
        )
        .catch(e => {
          console.log(e);
        });
    }

    return (
        <div id={styles.pageWrapper}>
        
        {selectedImage && (
            <Container id={styles.CreateProfileWrapper}>
            <Card id={styles.cardWrapper}>
              <Row>
                <Col xs={6}>
                  <br/>
                    <img alt="not fount" width={"150px"} height={"150px"}src={URL.createObjectURL(selectedImage)} id={styles.profileimage}/>
                      <div id={styles.imageUploadDiv}><input accept="image/*" id="icon-button-file"
                        type="file" style={{ display: 'none' }} 
                        onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(null);           // clear previous photo
                        setSelectedImage(event.target.files[0]);
                        updateProfileImg(event);
                      }}/>
                      </div>
                      <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture"
                          component="span" id={styles.cameraIcon}>
                        <PhotoCamera />
                        </IconButton>
                      </label>
                </Col>
                <Col xs={6}>
                  <div>
                  <p id={styles.h1paragraph}><b><h1 id={styles.nameh1}><br/><b>{user.name}</b></h1></b></p>
                  <p id={styles.userType}><b>User Type:</b> {user.userType}</p>
                  </div>
                  <br/>
                  </Col>
                    <Form onSubmit={submit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Container>
                          <Row>
                            <Col> 
                              <Form.Label class={styles.formLabel}>Job Title</Form.Label>
                                <Form.Control class="form-control" type="jobTitle" placeholder="" onChange={(e) => setJobTitle(e.target.value)} />
                                  </Col>
                                    <Col> 
                                      <Form.Label class={styles.formLabel}>Company</Form.Label>
                                        <Form.Select aria-label="Company" onChange={(e) => setCompany(e.target.value)}>
                                          <option>Select Company</option>
                                           <option value="Google">Google</option>
                                           <option value="Amazon">Amazon</option>
                                            <option value="Netflix">Netflix</option>
                                            <option value="iRobot">iRobot</option>
                                            <option value="Microsoft">Microsoft</option>
                                             <option value="Apple">Apple</option>
                                         </Form.Select>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col> 
                                      <Form.Label class={styles.formLabel}>Career Interest</Form.Label>
                                      <Form.Select aria-label="Company" onChange={(e) => setCareerInterest(e.target.value)}>
                                        <option>Select Option</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value="Bitcoin">Bitcoin</option>
                                        <option value="Job Data Science">Data Science</option>
                                        <option value="Cybersecurity">Cybersecurity</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="UI/UX">UI/UX</option> 
                                        <option value="Quantum Computing">Quantum Computing</option>      
                                      </Form.Select>
                                    </Col>
                                    <Col xs={6}> 
                                      <Form.Label class={styles.formLabel}>Class Of</Form.Label>
                                      <Form.Select aria-label="Company" required={true} onChange={(e) => setClassOf(e.target.value)}>
                                        <option>Graduating Year</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                         <option value="2000">2000</option>
                                      </Form.Select>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xs={6}>
                                      <Form.Label class={styles.formLabel}>Looking For</Form.Label>
                                        <Form.Select aria-label="Company" onChange={(e) => setLookingFor(e.target.value)}>
                                          <option>Select Option</option>
                                          <option value="Mentorship">Mentorship</option>
                                          <option value="Mentees">Mentees</option>
                                          <option value="Job Opportunities">Job Opportunities</option>
                                          <option value="Advice">Advice</option>
                                          <option value="Connections">Connections</option>
                                          <option value="Employees">Employees</option>      
                                        </Form.Select>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xs={6}>
                                      <Button id={styles.saveBtn} variant="primary" type="submit" >
                                      Save</Button>
                                    </Col>
                                  </Row>
                                </Container>
                              </Form.Group>
                            </Form>
                            </Row>
                           
                     {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
                     </Card>
                     </Container>
                    )} 
{defaultImage && (
              <Container id={styles.CreateProfileWrapper}>
              <Card id={styles.cardWrapper}>
                <Row>
                  <Col xs={6}>
                    <br/>
                    <img alt="not found" width={"150px"} height={"150px"}src={defaultImage} id={styles.profileimage}/>
                        <div id={styles.imageUploadDiv}><input accept="image/*" id="icon-button-file"
                          type="file" style={{ display: 'none' }} 
                          onChange={(event) => {
                          console.log(event.target.files[0]);
                         // setSelectedImage(null);           clear previous photo
                          setSelectedImage(event.target.files[0]);
                          console.log(selectedImage)
                          setDefaultImage(null);
                          updateProfileImg(event);
                        }}/>
                        </div>
                        <label htmlFor="icon-button-file">
                          <IconButton color="primary" aria-label="upload picture"
                            component="span" id={styles.cameraIcon}>
                          <PhotoCamera />
                          </IconButton>
                        </label>
                  </Col>
                  <Col xs={6}>
                    <div>
                    <p id={styles.h1paragraph}><b><h1 id={styles.nameh1}><br/><b>{user.name}</b></h1></b></p>
                    <p id={styles.userType}><b>User Type:</b> {user.userType}</p>
                    </div>
                    <br/>
                    </Col>
                      <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Container>
                            <Row>
                              <Col> 
                                <Form.Label class={styles.formLabel}>Job Title</Form.Label>
                                  <Form.Control class = "form-control" type="jobTitle" placeholder="" onChange={(e) => setJobTitle(e.target.value)}  />
                                    </Col>
                                      <Col> 
                                        <Form.Label class={styles.formLabel}>Company</Form.Label>
                                          <Form.Select aria-label="Company" onChange={(e) => setCompany(e.target.value)}>
                                            <option>Select Company</option>
                                             <option value="Google">Google</option>
                                             <option value="Amazon">Amazon</option>
                                              <option value="Netflix">Netflix</option>
                                              <option value="iRobot">iRobot</option>
                                              <option value="Microsoft">Microsoft</option>
                                               <option value="Apple">Apple</option>
                                           </Form.Select>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col> 
                                        <Form.Label>Career Interest</Form.Label>
                                        <Form.Select aria-label="Company" onChange={(e) => setCareerInterest(e.target.value)}>
                                          <option>Select Option</option>
                                          <option value="Software Engineering">Software Engineering</option>
                                          <option value="Bitcoin">Bitcoin</option>
                                          <option value="Job Data Science">Data Science</option>
                                          <option value="Cybersecurity">Cybersecurity</option>
                                          <option value="Web Development">Web Development</option>
                                          <option value="UI/UX">UI/UX</option> 
                                          <option value="Quantum Computing">Quantum Computing</option>      
                                        </Form.Select>
                                      </Col>
                                      <Col xs={6}> 
                                        <Form.Label id={styles.classOf}>Class Of</Form.Label>
                                        <Form.Select aria-label="Company" required={true} onChange={(e) => setClassOf(e.target.value)}>
                                          <option>Graduating Year</option>
                                          <option value="2021">2021</option>
                                          <option value="2020">2020</option>
                                          <option value="2019">2019</option>
                                          <option value="2018">2018</option>
                                          <option value="2017">2017</option>
                                          <option value="2016">2016</option>
                                          <option value="2015">2015</option>
                                          <option value="2014">2014</option>
                                          <option value="2013">2013</option>
                                          <option value="2012">2012</option>
                                          <option value="2011">2011</option>
                                          <option value="2010">2010</option>
                                          <option value="2009">2009</option>
                                          <option value="2008">2008</option>
                                          <option value="2007">2007</option>
                                          <option value="2006">2006</option>
                                          <option value="2005">2005</option>
                                          <option value="2004">2004</option>
                                          <option value="2003">2003</option>
                                          <option value="2002">2002</option>
                                          <option value="2001">2001</option>
                                           <option value="2000">2000</option>
                                        </Form.Select>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xs={6}>
                                        <Form.Label class={styles.formLabel}>Looking For</Form.Label>
                                          <Form.Select aria-label="Company" onChange={(e) => setLookingFor(e.target.value)}>
                                            <option>Select Option</option>
                                            <option value="Mentorship">Mentorship</option>
                                            <option value="Mentees">Mentees</option>
                                            <option value="Job Opportunities">Job Opportunities</option>
                                            <option value="Advice">Advice</option>
                                            <option value="Connections">Connections</option>
                                            <option value="Employees">Employees</option>      
                                          </Form.Select>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xs={6}>
                                        <Button id={styles.saveBtn} variant="primary" type="submit" >
                                        Save</Button>
                                      </Col>
                                    </Row>
                                  </Container>
                                </Form.Group>
                              </Form>
                              </Row>
                             
                       {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
                       </Card>
                       </Container>
                      )}
                  </div>
                  )
                };
export default CreateProfile