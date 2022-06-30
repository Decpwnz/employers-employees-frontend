import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function SalaryRange({
  handleMinValue, handleMaxValue,
}) {
  return (
    <div>
      <Form>
        <label htmlFor="salary-range">
          {' '}
          Salary Range
          <InputGroup className="mb-3" id="salary-range">
            <FormControl
              aria-label="First name"
              placeholder="From"
              type="number"
              onChange={handleMinValue}
            />
            <FormControl
              aria-label="Last name"
              placeholder="To"
              type="number"
              onChange={handleMaxValue}
            />
          </InputGroup>
        </label>
      </Form>
    </div>
  );
}
SalaryRange.propTypes = {
  handleMinValue: PropTypes.func.isRequired,
  handleMaxValue: PropTypes.func.isRequired,
};

export default SalaryRange;
