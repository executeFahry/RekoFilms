import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import blackAdamPoster from '../assets/images/movies/sci-fi/black_adam.jpg'
import gotg3Poster from '../assets/images/movies/sci-fi/gotg_vol3.jpg'
import theFlashPoster from '../assets/images/movies/sci-fi/the_flash.jpeg'
import transformersROTBPoster from '../assets/images/movies/sci-fi/transormers_rotb.jpg'

const ScienceFiction = () => {
   return (
      <div className="sciFi">
         <Container>
            <br />
            <h1 className="sectionTitle text-white  mb-4">Sci-Fi Movies</h1>
            <Row>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={blackAdamPoster} alt="Black Adam Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Black Adam(2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Oct 21, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={gotg3Poster} alt="Guardian of the Galaxy Vol.3 Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Guardian of the Galaxy Vol.3 (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">May 3, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={theFlashPoster} alt="The Flash Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">The Flash(2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Jun 16, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={transformersROTBPoster} alt="Transformers Rise of the Beasts Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Transformers Rise of the Beasts (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Jun 9, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default ScienceFiction;