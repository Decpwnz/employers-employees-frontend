import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function SearchBar({ onSearchChange }) {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </Form>
  );
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
export default SearchBar;
