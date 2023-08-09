import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import fastXPoster from '../assets/images/movies/actions/fast_x.jpg';
import indianaJonesPoster from '../assets/images/movies/actions/indiana_jones_dod.jpg';
import johnWick4Poster from '../assets/images/movies/actions/john_wick4.jpg'
import meg2Poster from '../assets/images/movies/actions/meg2.jpg';
import missionImpPoster from '../assets/images/movies/actions/mission_impossible_dr1.jpg';


const Action = () => {
   return (
      <div className="action">
         <Container>
            <br />
            <h1 className="sectionTitle text-white  mb-4">Action Movies</h1>
            <Row>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={fastXPoster} alt="Fast X Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Fast X (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">May 17, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={indianaJonesPoster} alt="Indiana Jones and the Dial of Destiny Poster" className="moviePoster" />
                     <div className="bg-dark textContainer">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Indiana Jones and the Dial of Destiny (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Jun 30, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={johnWick4Poster} alt="John Wick 4 Poster" className="moviePoster" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">John Wick 4 (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Mar 21, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={meg2Poster} alt="Meg 2: The Trench Poster" className="moviePoster" />
                     <div className="bg-dark textContainer">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Meg 2: The Trench (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Aug 2, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="mb-3">
                  <Card className="posterContainer">
                     <Image src={missionImpPoster} alt="Mission: Impossible - Dead Reckoning Part One Poster" className="moviePoster" />
                     <div className="bg-dark textContainer">
                        <div className="p-2 m-1 text-white">
                           <Card.Text className="textTitle">Mission: Impossible - Dead Reckoning Part One (2023)</Card.Text>
                           <Card.Text className="textReleaseDate">Jul 12, 2023</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div >
   );
}

export default Action;