import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ButtonValues = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function TypeFilter({ onClick, type }) {
  return (
    <div>
      Type Filter
      <ButtonGroup>
        <Button
          variant={type === ButtonValues.All ? 'primary' : 'outline-primary'}
          value={ButtonValues.All}
          onClick={onClick}
        >
          All
        </Button>
        <Button
          variant={type === ButtonValues.Employee ? 'primary' : 'outline-primary'}
          value={ButtonValues.Employee}
          onClick={onClick}
        >
          Employee
        </Button>
        <Button
          variant={type === ButtonValues.Employer ? 'primary' : 'outline-primary'}
          value={ButtonValues.Employer}
          onClick={onClick}
        >
          Employer
        </Button>
      </ButtonGroup>
    </div>
  );
}

TypeFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default TypeFilter;
