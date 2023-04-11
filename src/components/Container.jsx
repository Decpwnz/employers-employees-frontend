import { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/material';

import data from '../data/data';
import EmployeeList from './EmployeeList';
import SalaryRangeFilter from './SalaryRangeFilter';
import SearchBar from './SearchBar';
import TypeFilter from './TypeFilter';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(6),
  },
}));

const PersonData = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function Container() {
  const classes = useStyles();

  const [type, setType] = useState(PersonData.All);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  const handleTypeClick = (event) => {
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
    <Box sx={{ flexGrow: 1 }} className={classes.container}>
      <Box className={classes.filterContainer}>
        <SearchBar onSearchChange={handleSearchChange} />
        <TypeFilter onClick={handleTypeClick} type={type} />
        <SalaryRangeFilter
          onMinValueChange={handleMinValue}
          onMaxValueChange={handleMaxValue}
          minValue={minValue}
          maxValue={maxValue}
        />
      </Box>
      <EmployeeList
        type={type}
        searchTerm={searchTerm}
        minValue={minValue}
        maxValue={maxValue}
        data={data}
      />
    </Box>
  );
}

export default Container;
