import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import RBContainer from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import data from './data';
import SalaryRange from './SalaryRange';
import SearchBar from './SearchBar';
import Table from './Table';
import TypeFilter from './TypeFilter';

const PersonData = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function Container() {
  const [type, setType] = useState(PersonData.All);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  const handleClick = (event) => {
    setType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinValue = (event) => {
    if (event.target.value === '') setMinValue(null);
    else setMinValue(Number(event.target.value));
  };

  const handleMaxValue = (event) => {
    if (event.target.value === '') setMaxValue(null);
    else setMaxValue(Number(event.target.value));
  };

  return (
    <RBContainer fluid>
      <Row>
        <Col xs={10}>
          1 of 1
          <Table
            type={type}
            searchTerm={searchTerm}
            minValue={minValue}
            maxValue={maxValue}
            data={data}
          />
        </Col>
        <Col>
          2 of 2
          <br />
          <SearchBar handleSearchChange={handleSearchChange} />
          <TypeFilter onClick={handleClick} type={type} />
          <SalaryRange
            onMinValueChange={handleMinValue}
            onMaxValueChange={handleMaxValue}
          />
        </Col>
      </Row>
    </RBContainer>
  );
}

export default Container;
