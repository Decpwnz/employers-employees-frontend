import PropTypes from 'prop-types';
import RBTable from 'react-bootstrap/Table';

function Table({ team }) {
  return (
    <RBTable striped bordered hover>
      <thead>
        <tr>
          <th>Employe/Employer</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Workplace Number</th>
          <th>Lunch Time</th>
          <th>Business Hours</th>
        </tr>
      </thead>
      {
        team.map((item) => (
          <tbody key={item.id}>
            <tr>
              <th>{item.type}</th>
              <th>{item.name}</th>
              <th>{item.salary}</th>
              <th>{item.workplaceNumber}</th>
              <th>{item.lunchTime}</th>
              <th>{item.businessHours}</th>
            </tr>
          </tbody>
        ))
      }
    </RBTable>
  );
}

Table.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    workplaceNumber: PropTypes.number.isRequired,
    lunchTime: PropTypes.string.isRequired,
    businessHours: PropTypes.string.isRequired,
  })).isRequired,
};

export default Table;
