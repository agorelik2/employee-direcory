import React from "react";
import EmployeeRow from "./employeeRow";

function EmployeeTable({ handleSort, filteredEmployees }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col" value="first" key="first" onClick={handleSort}>
            First
          </th>
          <th value="last" scope="col" key="last" onClick={handleSort}>
            Last
          </th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <EmployeeRow
            key={employee.id.value}
            first={employee.name.first}
            last={employee.name.last}
            email={employee.email}
            age={employee.dob.age}
            city={employee.location.city}
            state={employee.location.state}
            photo={employee.picture.thumbnail}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
