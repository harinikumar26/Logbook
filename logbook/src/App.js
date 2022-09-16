import logo from './logo.svg';
import './App.css';
import StaffDetails from './StaffDetails';
import { Component } from 'react';
import StaffChecks from './StaffChecks';
import StaffReport from './StaffReport';
const staff =
  [

    {
      staff_name: 'Kalpana',
      staff_id: 'CS001',
      DOB: '26/05/2001',
      DOJ: '20/04/2015',
      Address: 'Salem',
      Mobile_no: '7339389815',
      email_id: "pnithya23@gmail.com"
    },
    {
      staff_name: 'Ruba',
      staff_id: 'CS002',
      DOB: '20/08/1995',
      DOJ: '28/06/2010',
      Address: 'Omalur',
      Mobile_no: '7867654523',
      email_id: "ruba2523@gmail.com"
    },
    {
      staff_name: 'Tharani',
      staff_id: 'CS003',
      DOB: '15/06/1985',
      DOJ: '03/09/2001',
      Address: 'Namakal',
      Mobile_no: '7867654523',
      email_id: "tharani2345@gmail.com"
    },
    {
      staff_name: 'Nithya',
      staff_id: 'CS004',
      DOB: '15/06/1985',
      DOJ: '03/09/2001',
      Address: 'Chennai',
      Mobile_no: '7867654523',
      email_id: "nithya2345@gmail.com"
    }
  ];
  const staffcheck = 
  [
    {
    staff_name:'Tharani',
    staff_id:'CS001',
    check_in:'10 am',
    check_out:'5 pm'
  },
  {
    staff_name:'Manimala',
    staff_id:'CS002',
    check_in:'9 am',
    check_out:'4.30 pm'
  },
  {
    staff_name:'Ruba',
    staff_id:'CS003',
    check_in:'11 am',
    check_out:'3 pm'
  },
  {
    staff_name:'Nithya',
    staff_id:'CS004',
    check_in:'9 am',
    check_out:'4.30 pm'
  }

]

/*const App = () => {
    return (
      <div>
        <h1>Staff Details</h1>
        <StaffDetails staff={staff} staffcheck={staffcheck} />
      </div>
    );
} export default App;*/

class App extends Component {
        render(){
          return(
            <div>
            <div class = "App">
            <h4>
            <StaffChecks staffcheck={staffcheck} /> 
            <StaffDetails staff={staff}/>
            <StaffReport />
            </h4>
            </div>
            </div>
          );
        }
      }
      export default App;
      