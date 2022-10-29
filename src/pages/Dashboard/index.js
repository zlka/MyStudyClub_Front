import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './index.css'

function Dashboard() {
  return (
    <>

    
    <div className="table-container">

    
    <Table style={{
            textAlign: 'center'
          }}  hover>
      <thead>
        <tr style={{
          backgroundColor: 'lightblue'
        }}>
          <th>Username</th>
          <th style={{
            fontSize: '48px'
          }}>Dashboard</th>
          <th style={{
            fontSize: '48px'
          }}>+</th>
        </tr>
      </thead>
      <tbody style={{
        backgroundColor: 'lightpink'
      }}>
        <tr>
          <td>History 101</td>
          <td>Otto</td>
          <td style={{
            width: '4rem'
          }}><Button variant="success">Go</Button>{' '}</td>
        </tr>
        <tr>

          <td>Driving Theory Test</td>
          <td>Thornton</td>
          <td style={{
            width: '4rem'
          }}><Button variant="success">Go</Button>{' '}</td>
        </tr>
        <tr>
          <td>Maths 10NR</td>
          <td>4 Sets</td>
          <td style={{
            width: '4rem'
          }}><Button variant="success">Go</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default Dashboard;
