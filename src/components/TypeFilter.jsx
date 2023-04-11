import {
  Box,
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@mui/material';
import PropTypes from 'prop-types';

const ButtonValues = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function NewTypeFilter({ onClick, type }) {
  return (
    <Box p={2}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={type}
        >
          <FormControlLabel onClick={onClick} value={ButtonValues.All} control={<Radio />} label="All" />
          <FormControlLabel onClick={onClick} value={ButtonValues.Employee} control={<Radio />} label="Employee" />
          <FormControlLabel onClick={onClick} value={ButtonValues.Employer} control={<Radio />} label="Employer" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

NewTypeFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default NewTypeFilter;
