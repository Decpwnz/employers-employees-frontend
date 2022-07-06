import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function SearchBar({ handleSearchChange }) {
  return (
    <Form>
      Search Bar
      <Form.Control
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
    </Form>
  );
}

SearchBar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
};
export default SearchBar;
