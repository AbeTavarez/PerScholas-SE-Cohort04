import { Container, Row, Col, Navbar } from "react-bootstrap";

import StarshipCard from "./StarshipCard";

function StarshipList({ data }) {
  return (
    <Container fluid="md">
      <Navbar  expand="lg" bg="dark" variant="dark" className="mb-5">
        <Container>
        <Navbar.Brand href="#home">Star Wars Starships</Navbar.Brand></Container>
      </Navbar>
      <Row>
        {data.map((i) => (
         <StarshipCard ship={i} />
        ))}
      </Row>
    </Container>
  );
}
export default StarshipList;
