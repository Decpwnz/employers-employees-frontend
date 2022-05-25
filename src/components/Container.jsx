import { useState } from 'react';

import { Container as RBContainer } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import data from './data';
import Table from './Table';
import TypeFilter from './TypeFilter';

const PersonData = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function Container() {
  const [team, setTeam] = useState(data);
  const [active, setActive] = useState();

  const handleClick = (event) => {
    const typeFilter = event.target.value;

    if (typeFilter === PersonData.All) {
      setTeam(data);
      setActive('All');
    } else if (typeFilter === PersonData.Employee) {
      const filtered = data.filter((item) => item.type === PersonData.Employee);
      setTeam(filtered);
      setActive('Employee');
    } else if (typeFilter === PersonData.Employer) {
      const filtered = data.filter((item) => item.type === PersonData.Employer);
      setTeam(filtered);
      setActive('Employer');
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
          <TypeFilter onClick={handleClick} active={active} />
        </Col>
      </Row>
    </RBContainer>
  );
}

export default Container;