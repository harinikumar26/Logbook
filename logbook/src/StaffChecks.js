import React,{ Component } from'react';
import './App.css';
class StaffChecks extends Component {
    render() {
        return (
        <div>
            <table className='staffs'>
                <tbody>
                <tr>
                    <th>staff_name</th>
                    <th>staff_id</th>
                    <th>check_in</th>
                    <th>check_out</th>
                </tr>
                {
               this.props.staffcheck.map(staffcheck =>{

                return (
                        <tr key ={staffcheck.staff_id}>
                            <td>{staffcheck.staff_name}</td>
                            <td>{staffcheck.staff_id}</td>
                            <td>{staffcheck.check_in}</td>
                            <td>{staffcheck.check_out}</td>
                        </tr>
                    )
                }
                )
            }
                </tbody>
            </table>
        </div>)
    }
}
export default StaffChecks;