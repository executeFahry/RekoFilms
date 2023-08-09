import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import barbiePoster from '../assets/images/movies/fantasy/barbie.jpg'

const Fantasy = () => {
   return (
      <div className="fantasy">
         <Container>
            <br />
            <h1 className="sectionTitle text-white  mb-4">Fantasy Movies</h1>
            <Row>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={barbiePoster} alt="Barbie Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Barbie (2023)</Card.Text>
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

export default Fantasy;