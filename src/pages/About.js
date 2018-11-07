import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="./desk.jpg">
      <h1>e.KORSLIN</h1>
      <h5>a Full-Stack Web Developer</h5><br/>
      <button class="btn info">PORTFOLIO</button>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
        <div className="card">
        <h2>Welcome...</h2><br/>
          <p>
            While studying for his MBA at DePaul University in the fall of 2013, Eric was enlightened to the dynamic potential of web development while stuyding under longtime IBM Consultant & Professor of Management - Information Systems, Dr. Sasha Deklava.  Here, Eric's love for coding and development was born.  
          </p>
            <p>It was then Eric began to implement a number of Deklava's teachings into daily practice as the Director of Purchasing & Logistics in the healthcare supply space at Chicago-based Centrad Healthcare, LLC. 
          </p>
          <p>---</p>
          <h2>EJK</h2>
          {/* <p>
            It wasn't long before Eric started to hunger for more technical education on the topic.  In May of 2018, Eric enrolled in the School of Professional Studies at Chicago's Northwestern University in the school's Full-Stack Web Development curricula.  Eric graduated from the program in November of 2018.</p><p id="bottom-p">---</p><br/><br/> */}
          </div>
          
         
        </Col>
        </Row>
        <Col size="md-1">
        </Col><br/><br/>
    
      <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-2">
          <img src="view.jpeg"/>
      <div class="overlay">
          <div class="text">Portfolio</div>
        </div>
      </div>
      <div className="col-md-2">
      <img src="phone.jpg"/>
      </div>
      <div className="col-md-2">
      <img src="grad.jpg"/>
      </div>
      <div className="col-md-3"></div>
      </div>

    </Container>
  </div>
);

export default About;
