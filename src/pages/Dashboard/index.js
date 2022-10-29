import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './index.css'

function Dashboard() {
  return (
    <>
    <div className="main-container">

      <div className="header">

       <h1> My Study Club </h1> 

      </div>

    <div className="upcoming-container">

      <h1> Upcoming </h1>

    </div>
    
    <div className="table-container">

    
    <Table style={{
            textAlign: 'center'
          }}  hover>
      <thead>
        <tr style={{
          backgroundColor: 'lightblue',
        }}>
          <th style ={{
            borderStyle: 'solid',
            borderColor: 'Azure',
            borderWidth: '5px',
            verticalAlign: 'middle',
            fontSize: '48px'
          }}>Leehamb99</th>
          <th style={{
            fontSize: '48px',
            borderStyle: 'solid',
            borderColor: 'Azure',
            borderWidth: '5px',
            verticalAlign: 'middle'
          }}>Dashboard</th>
          <th style={{
            fontSize: '48px',
            borderStyle: 'solid',
            borderColor: 'Azure',
            borderWidth: '5px',
            verticalAlign: 'middle'
          }}>+</th>
        </tr>
      </thead>
      <tbody style={{
        backgroundColor: 'lightpink',
        fontSize: '20px'
      }}>
        <tr>
          <td>History 101</td>
          <td>1 Set</td>
          <td style={{
            width: '4rem'
          }}><Button>Go</Button>{' '}</td>
        </tr>
        <tr>

          <td>Driving Theory Test</td>
          <td>3 Sets</td>
          <td style={{
            width: '4rem'
          }}><Button>Go</Button>{' '}</td>
        </tr>
        <tr>
          <td>Maths 10NR</td>
          <td>4 Sets</td>
          <td style={{
            width: '4rem'
          }}><Button>Go</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    </>
  );
}

export default Dashboard;
