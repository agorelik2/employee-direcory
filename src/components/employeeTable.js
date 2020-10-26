import React from "react";
import EmployeeRow from "./employeeRow";

function EmployeeTable({ handleSort, filteredEmployees }) {
  return (
    <div className="datatable mt-3">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col" className="th">
              Photo
            </th>
            <th
              scope="col"
              className="hcol"
              value="first"
              key="first"
              onClick={handleSort}
            >
              First
            </th>
            <th
              value="last"
              scope="col"
              className="hcol"
              key="last"
              onClick={handleSort}
            >
              Last
            </th>
            <th scope="col" className="th">
              Email
            </th>
            <th scope="col" className="th">
              Age
            </th>
            <th scope="col" className="th">
              Location
            </th>
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
    </div>
  );
}

export default EmployeeTable;
