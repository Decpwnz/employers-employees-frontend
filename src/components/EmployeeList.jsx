import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function EmployeeList({
  data, type, searchTerm, minValue, maxValue,
}) {
  const sortedData = data.sort((a, b) => (a.name > b.name ? 1 : -1));

  const filteredData = sortedData.filter((item) => {
    function handleTypeFilter(value, employee) {
      if (value === 'All') return true;
      return value === employee.type;
    }

    function handleSearchBar(search, employee) {
      if (employee.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    }

    function handleSalaryRange(min, max, employee) {
      if (min === null && employee.salary <= max) return true;
      if (max === null && employee.salary >= min) return true;
      if (employee.salary >= min && employee.salary <= max) return true;
      return false;
    }

    return (
      handleSalaryRange(minValue, maxValue, item)
    && handleSearchBar(searchTerm, item)
    && handleTypeFilter(type, item)
    );
  });

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '10px' }}>
      {filteredData.map((employee) => (
        <Card
          sx={{ padding: '16px', marginTop: '16px' }}
          key={employee.id}
        >
          {employee.type === 'Employer' ? (
            <CardContent>
              <Typography>
                {`Type: ${employee.type}`}
              </Typography>
              <Typography>
                {`Name: ${employee.name}`}
              </Typography>
              <Typography>
                {`Salary: ${employee.salary}`}
              </Typography>
              <Typography>
                {`Business Hours: ${employee.businessHours}`}
              </Typography>
            </CardContent>
          ) : (
            <CardContent>
              <Typography>
                {`Type: ${employee.type}`}
              </Typography>
              <Typography>
                {`Name: ${employee.name}`}
              </Typography>
              <Typography>
                {`Salary: ${employee.salary}`}
              </Typography>
              <Typography>
                {`Workplace Number: ${employee.workplaceNumber}`}
              </Typography>
              <Typography>
                {`Lunch Time: ${employee.lunchTime}`}
              </Typography>
            </CardContent>
          )}
        </Card>
      ))}
    </Box>
  );
}

EmployeeList.propTypes = {
  type: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    workplaceNumber: PropTypes.oneOfType([
      PropTypes.any,
    ]),
    lunchTime: PropTypes.oneOfType([
      PropTypes.any,
    ]),
    businessHours: PropTypes.oneOfType([
      PropTypes.any,
    ]),
  })).isRequired,
};

EmployeeList.defaultProps = {
  minValue: null,
  maxValue: null,
};
export default EmployeeList;
