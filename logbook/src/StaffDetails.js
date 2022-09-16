import React, { Component } from 'react';
import './App.css'
 class StaffDetails extends Component {
     render() {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>staff_name</th>
                    <th>staff_id</th>
                    <th>DOB</th>
                    <th>DOJ</th>
                    <th>Address</th>
                </tr>
                {
               this.props.staff.map(staff =>{

                return (
                        <tr key ={staff.staff_id}>
                            <td>{staff.staff_name}</td>
                            <td>{staff.staff_id}</td>
                            <td>{staff.DOB}</td>
                            <td>{staff.DOJ}</td>
                            <td>{staff.Address}</td>
                        </tr>
                    )
                }
                )
            }
                </tbody>
            </table>
        </div>
    );
}
 }
 export default StaffDetails;