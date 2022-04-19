import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';

function Grids() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            1 of 3
            {' '}
            <Button>Yo</Button>
          </Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={10}>
            sm=10
            {' '}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
            </Form>
          </Col>
          <Col sm={2}>sm=2</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Grids;
