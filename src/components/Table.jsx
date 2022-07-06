import PropTypes from 'prop-types';
import RBTable from 'react-bootstrap/Table';

function Table({
  type,
  searchTerm,
  minValue,
  maxValue,
  data,
}) {
  return (
    <div>
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
          data.filter((item) => {
            function handleTypeFilter(val) {
              if (val === 'Employer') return item.type === val;
              if (val === 'Employee') return item.type === val;
              return true;
            }

            function handleSearchBar(search) {
              if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return true;
              }
              return false;
            }

            function handleSalaryRange(min, max) {
              if (min === null && item.salary <= max) return true;
              if (max === null && item.salary >= min) return true;
              if (item.salary >= min && item.salary <= max) return true;
              return false;
            }

            return (
              handleSalaryRange(minValue, maxValue)
              && handleSearchBar(searchTerm)
              && handleTypeFilter(type)
            );
          }).map((item) => (
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
    </div>
  );
}

Table.propTypes = {
  type: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    workplaceNumber: PropTypes.number.isRequired,
    lunchTime: PropTypes.string.isRequired,
    businessHours: PropTypes.string.isRequired,
  })).isRequired,
};

Table.defaultProps = {
  minValue: null,
  maxValue: null,
};

export default Table;
