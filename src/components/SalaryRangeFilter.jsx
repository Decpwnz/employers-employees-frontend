import { Box, TextField } from '@mui/material';
import PropTypes from 'prop-types';

function SalaryRangeFilter({
  onMinValueChange, onMaxValueChange, minValue, maxValue,
}) {
  return (
    <Box p={2}>
      <Box sx={{ mb: 1 }}>
        <TextField
          label="Salary starting from"
          type="number"
          value={minValue ?? ''}
          onChange={onMinValueChange}
          InputProps={{ inputProps: { min: 0 } }}
        />
      </Box>
      <Box>
        <TextField
          label="Salary up to"
          type="number"
          value={maxValue ?? ''}
          onChange={onMaxValueChange}
          InputProps={{ inputProps: { min: 0 } }}
        />
      </Box>
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
