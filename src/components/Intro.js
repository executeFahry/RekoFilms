import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
   return (
      <div div className="intro d-flex justify-content-end align-items-end" >
         <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
               <Col>
                  <div className="jargon">Kill Your Times Here<span className="text-danger">.</span></div>
                  <div className="seeMovieListButton mt-4 text-center">
                     <Button variant="outline-danger">Click or Tap the Navigation</Button>
                  </div>
               </Col>
            </Row>
         </Container>
      </div >

   );
}

export default Intro;