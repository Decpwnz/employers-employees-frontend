import Button from 'react-bootstrap/Button';

function TypeFilter({ onClick }) {
  return (
    <div>
      <Button variant="outline-primary" type="button" value="All" onClick={onClick}>All</Button>
      <Button variant="outline-primary" type="button" value="Employee" onClick={onClick}>Employee</Button>
      <Button variant="outline-primary" type="button" value="Employer" onClick={onClick}>Employer</Button>
    </div>
  );
}

export default TypeFilter;
