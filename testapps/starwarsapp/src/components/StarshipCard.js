import { Card, Button } from "react-bootstrap";

function CardItem({ ship }) {
  return (
    <Card
      bg="dark"
      style={{ width: "18rem", marginLeft: "15px", marginBottom: "15px" }}
    >
      <Card.Body>
        <Card.Title style={{color: '#fff'}}>{ship.name}</Card.Title>
        <Card.Text style={{color: '#fff'}}>{ship.manufacturer}</Card.Text>
        <Button variant="primary">Get more info</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
