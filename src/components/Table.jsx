import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Table } from 'react-bootstrap';

function Tables() {
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee/Employer</th>
            <th>Зарплата</th>
            <th>ФИО</th>
            <th>Номер рабочего места</th>
            <th>Обеденное время</th>
            <th>Часы приема</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
