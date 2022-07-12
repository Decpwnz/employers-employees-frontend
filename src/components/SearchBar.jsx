import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function SearchBar({ onSearchChange }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search..."
      onChange={onSearchChange}
    />
  );
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
export default SearchBar;
