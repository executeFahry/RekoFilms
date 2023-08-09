import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import oppenheimerPoster from '../assets/images/movies/science/oppenheimer.jpg'

const Science = () => {
   return (
      <div className="science">
         <Container>
            <br />
            <h1 className="sectionTitle text-white  mb-4">Science Movies</h1>
            <Row>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={oppenheimerPoster} alt="Oppenheimer Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Oppenheimer (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Jul 19, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default Science;