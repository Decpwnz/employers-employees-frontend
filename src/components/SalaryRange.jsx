import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function SalaryRange({
  onMinValueChange, onMaxValueChange,
}) {
  return (
    <label htmlFor="salary-range">
      {' '}
      Salary Range
      <InputGroup className="mb-3" id="salary-range">
        <FormControl
          aria-label="First name"
          placeholder="From"
          type="number"
          onChange={onMinValueChange}
        />
        <FormControl
          aria-label="Last name"
          placeholder="To"
          type="number"
          onChange={onMaxValueChange}
        />
      </InputGroup>
    </label>
  );
}
SalaryRange.propTypes = {
  onMinValueChange: PropTypes.func.isRequired,
  onMaxValueChange: PropTypes.func.isRequired,
};

export default SalaryRange;
