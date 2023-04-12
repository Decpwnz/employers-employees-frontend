import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';

const ButtonValues = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function TypeFilter({ onClick, type }) {
  return (
    <FormControl sx={{ padding: '16px' }}>
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
  );
}

TypeFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default TypeFilter;
