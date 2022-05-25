import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ButtonValues = {
  All: 'All',
  Employee: 'Employee',
  Employer: 'Employer',
};

function TypeFilter({ onClick, active }) {
  return (
    <ButtonGroup>
      <Button
        variant={active === 'All' ? 'primary' : 'outline-primary'}
        value={ButtonValues.All}
        onClick={onClick}
      >
        All
      </Button>
      <Button
        variant={active === 'Employee' ? 'primary' : 'outline-primary'}
        value={ButtonValues.Employee}
        onClick={onClick}
      >
        Employee
      </Button>
      <Button
        variant={active === 'Employer' ? 'primary' : 'outline-primary'}
        value={ButtonValues.Employer}
        onClick={onClick}
      >
        Employer
      </Button>
    </ButtonGroup>
  );
}

export default TypeFilter;