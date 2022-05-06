import { useState } from 'react';

import { Container as RBContainer } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import data from './data';
import Table from './Table';
import TypeFilter from './TypeFilter';

const typeData = {
  employee: 'Employee',
  employer: 'Employer',
};

function Container() {
  const [team, setTeam] = useState(data);

  const handleClick = (event) => {
    const typeFilter = event.target.value;

    if (typeFilter === 'All') {
      setTeam(data);
    } else if (typeFilter === typeData.employee) {
      const filtered = data.filter((item) => item.type === typeData.employee);
      setTeam(filtered);
    } else if (typeFilter === typeData.employer) {
      const filtered = data.filter((item) => item.type === typeData.employer);
      setTeam(filtered);
    }
  };

  return (
    <RBContainer fluid>
      <Row>
        <Col xs={10}>
          1 of 1
          <Table team={team} />
        </Col>
        <Col>
          2 of 2
          <br />
          <TypeFilter onClick={handleClick} />
        </Col>
      </Row>
    </RBContainer>
  );
}

export default Container;
