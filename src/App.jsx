import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div breakpoints=''>
      <div className='p-3 m-5'>
      <Button variant="info">ADD ITEM</Button>
      </div>
      <div className='p-3 m-5'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>operation 1</th>
          <th>operation 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Button size='sm' variant="info">Update Item</Button></td>
          <td><Button size='sm' variant="info">Delete Item</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Button size='sm' variant="info">Update Item</Button></td>
          <td><Button size='sm' variant="info">Delete Item</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td><Button size='sm' variant="info">Update Item</Button></td>
          <td><Button size='sm' variant="info">Delete Item</Button></td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default App
