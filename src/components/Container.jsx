import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import RBContainer from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import SalaryRange from './SalaryRange';
import Table from './Table';
import TypeFilter from './TypeFilter';

const PersonData = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function Container() {
  const [team, setTeam] = useState('');
  const [active, setActive] = useState(PersonData.All);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const handleMinValue = (event) => {
    if (event.target.value === '') setMinValue('');
    else setMinValue(event.target.value);
  };

  const handleMaxValue = (event) => {
    if (event.target.value === '') setMaxValue('');
    else setMaxValue(event.target.value);
  };

  const handleClick = (event) => {
    setTeam(event.target.value);
    setActive(event.target.value);
  };

  return (
    <RBContainer fluid>
      <Row>
        <Col xs={10}>
          1 of 1
          <Table
            team={team}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
          />
        </Col>
        <Col>
          2 of 2
          <br />
          <TypeFilter onClick={handleClick} active={active} />
          <SalaryRange
            handleMinValue={handleMinValue}
            handleMaxValue={handleMaxValue}
          />
        </Col>
      </Row>
    </RBContainer>
  );
}

export default Container;
