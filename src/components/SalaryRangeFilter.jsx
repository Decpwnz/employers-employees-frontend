import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

function SalaryRangeFilter({
  onMinValueChange, onMaxValueChange, minValue, maxValue,
}) {
  return (
    <Box p={2} sx={{ display: 'grid', gridGap: '8px' }}>
      <TextField
        label="Salary starting from"
        type="number"
        value={minValue ?? ''}
        onChange={onMinValueChange}
        InputProps={{ inputProps: { min: 0 } }}
      />
      <TextField
        label="Salary up to"
        type="number"
        value={maxValue ?? ''}
        onChange={onMaxValueChange}
        InputProps={{ inputProps: { min: 0 } }}
      />
    </Box>
  );
}

SalaryRangeFilter.propTypes = {
  onMinValueChange: PropTypes.func.isRequired,
  onMaxValueChange: PropTypes.func.isRequired,
  minValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  maxValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
};

SalaryRangeFilter.defaultProps = {
  minValue: null,
  maxValue: null,
};

export default SalaryRangeFilter;
