import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Contacto = () => {
  return (
    <Container className="text-center">
      <Form>
        <Form.Group className="mb-2 mt" controlId="correo">
          <Form.Label>Correo: </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción: </Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contacto;
