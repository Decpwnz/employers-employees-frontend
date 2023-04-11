import { makeStyles } from '@material-ui/core';
import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: theme.spacing(1.25),
  },
  cardItem: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

function EmployeeList({
  data, type, searchTerm, minValue, maxValue,
}) {
  const classes = useStyles();
  const sortedData = data.sort((a, b) => (a.name > b.name ? 1 : -1));

  const filteredData = sortedData.filter((item) => {
    function handleTypeFilter(value, member) {
      if (value === 'All') return true;
      return value === member.type;
    }

    function handleSearchBar(search, member) {
      if (member.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    }

    function handleSalaryRange(min, max, member) {
      if (min === null && member.salary <= max) return true;
      if (max === null && member.salary >= min) return true;
      if (member.salary >= min && member.salary <= max) return true;
      return false;
    }

    return (
      handleSalaryRange(minValue, maxValue, item)
    && handleSearchBar(searchTerm, item)
    && handleTypeFilter(type, item)
    );
  });

  return (
    <Box className={classes.gridContainer}>
      {filteredData.map((employee) => (
        <Card className={classes.cardItem} key={employee.id}>
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
