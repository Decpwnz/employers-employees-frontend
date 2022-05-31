import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import RBContainer from 'react-bootstrap/Container';
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
  const [active, setActive] = useState(PersonData.All);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (event) => {
    const typeFilter = event.target.value;

    if (typeFilter === PersonData.All) {
      setTeam(data);
      setActive(PersonData.All);
    } else if (typeFilter === PersonData.Employee) {
      const filtered = data.filter((item) => item.type === PersonData.Employee);
      setTeam(filtered);
      setActive(PersonData.Employee);
    } else if (typeFilter === PersonData.Employer) {
      const filtered = data.filter((item) => item.type === PersonData.Employer);
      setTeam(filtered);
      setActive(PersonData.Employer);
    }
  };

  return (
    <RBContainer fluid>
      <Row>
        <Col xs={10}>
          1 of 1
          <Table
            team={team}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            data={data}
          />
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
