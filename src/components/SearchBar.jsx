import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function SearchBar({ setSearchTerm }) {
  return (
    <div>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Form>
    </div>
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
export default SearchBar;
