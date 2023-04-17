import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const StatusLight = styled('div')(({ available }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: available ? 'green' : 'orange',
  display: 'inline-block',
  marginRight: '5px',
}));

const currentTime = new Date().getHours();

function EmployeeList({
  data, type, searchTerm, minValue, maxValue,
}) {
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

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
    <Grid container spacing={2} marginTop={4}>
      {filteredData.map((employee) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={employee.id}>
          <Card
            sx={{ height: '100%' }}
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
                {currentTime === employee.lunchTime ? (
                  <Grid container alignItems="center">
                    <StatusLight />
                    <Typography>Lunch Time</Typography>
                  </Grid>
                ) : (
                  <Grid container alignItems="center">
                    <StatusLight available />
                    <Typography>Available</Typography>
                  </Grid>
                )}
              </CardContent>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
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
