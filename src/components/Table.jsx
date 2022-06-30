import PropTypes from 'prop-types';
import RBTable from 'react-bootstrap/Table';

import data from './data';
import SearchBar from './SearchBar';

function Table({
  team,
  searchTerm,
  onSearchChange,
  minValue,
  maxValue,
}) {
  return (
    <div>
      <SearchBar onSearchChange={onSearchChange} />
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
            const salaryRange = () => {
              if (minValue === '' && item.salary <= maxValue) return true;
              if (maxValue === '' && item.salary >= minValue) return true;
              if (item.salary >= minValue && item.salary <= maxValue) return true;
              return false;
            };

            const searchBar = () => {
              if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
              }
              return false;
            };

            const typeButton = () => {
              if (team === 'Employer') return item.type === 'Employer';
              if (team === 'Employee') return item.type === 'Employee';
              return true;
            };

            return salaryRange() && searchBar() && typeButton();
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
  team: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  minValue: PropTypes.string.isRequired,
  maxValue: PropTypes.string.isRequired,
};

export default Table;
