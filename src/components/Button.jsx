import Button from 'react-bootstrap/Button';

function EmployeeEmployerButtons({ handleClick }) {
  return (
    <>
      <Button variant="primary" type="button" value="All" onClick={handleClick}>All</Button>
      <Button variant="primary" type="button" value="Employee" onClick={handleClick}>Employee</Button>
      <Button variant="primary" type="button" value="Employer" onClick={handleClick}>Employer</Button>
    </>
  );
}

export default EmployeeEmployerButtons;
