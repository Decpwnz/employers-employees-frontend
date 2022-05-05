import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import EmployeeEmployerButtons from './Button';
import data from './data';
import Tables from './Table';

function Containers() {
  const [state, setState] = useState(data);

  const handleClick = (event) => {
    const word = event.target.value;

    if (word === 'All') {
      setState(data);
    } else if (word === 'Employee') {
      const filtered = data.filter((item) => item.type === 'Employee');
      setState(filtered);
    } else if (word === 'Employer') {
      const filtered = data.filter((item) => item.type === 'Employer');
      setState(filtered);
    }
  };

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={10}>
            1 of 1
            <Tables state={state} handleClick={handleClick} />
          </Col>
          <Col>
            2 of 2
            <br />
            <EmployeeEmployerButtons state={state} handleClick={handleClick} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Containers;
