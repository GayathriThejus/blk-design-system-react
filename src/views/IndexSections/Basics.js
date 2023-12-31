
import React from "react";
import RowPost from "./RowPost";
import Counter from './Counter';




import {
  
  
  Container,
  Row,
  Col,
} from "reactstrap";



export default function Basics() {
  
  const counterStyle = {
    fontSize: '2rem',
    
  };
  
  
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
      <h3 className="text-danger">About IPL</h3>

        <h4>Innovators' Premier League (IPL) is an initiative of the Kerala Startup Mission (KSUM) to bring out the best talents from the Kerala Innovation Hubs. IPL aims to bring awareness and sensitization of IEDC & its activities among students, building a competitive & entrepreneurial mindset among innovators, and create the pipeline of startups.</h4>
        <br/>
        <br/>
        <h4>During IPL, the students in the institution will compete with each other at the College level, followed by Regional level and at the State level challenges under the 3 major pillars - Innovation, Technology & Entrepreneurship. The league competition runs on a point scale where institutions and students can achieve points by organizing and taking part in boot camps, workshops, ideathons, hackathons, etc. under various categories.</h4>
        <br />
       
        <Row>
          <Col md="8">
            <Counter style={counterStyle}/>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      
       {/* <Row>
          <Col md="12">
            <RowPost/>
          </Col>
  </Row> */}
      </Container> 
    </div>
  );
}

