import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Néstor Arce Nuñez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ingeniería en Desarrollo de Software</Card.Subtitle>
        <Card.Text>
        Mi nombre es Néstor Arce Nuñez. Me interesa el mundo de la programación, sobre todo en lo relacionado al diseño web.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Más información</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;