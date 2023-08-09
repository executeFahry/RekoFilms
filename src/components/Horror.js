import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import evilDeadPoster from '../assets/images/movies/horror/evil_dead_rise.jpg'

const Horror = () => {
   return (
      <div className="horror">
         <Container>
            <br />
            <h1 className="sectionTitle text-white  mb-4">Horror Movies</h1>
            <Row>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={evilDeadPoster} alt="Evil Dead Rise Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Evil Dead Rise (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">May 5, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default Horror;