import React from "react";
// import "./EmployeeRow.css";

function EmployeeRow(props) {
  return (
    <tr>
      <td>
        <img alt={props.last} src={props.photo} />
      </td>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
      <td>
        {props.city}, {props.state}
      </td>
    </tr>
  );
}
export default EmployeeRow;
