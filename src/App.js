import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/container";
import Api from "./utils/api.js";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import EmployeeTable from "./components/employeeTable";

class App extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
  };

  handleSearch = (searchInput) => {
    const filtered = this.state.employees.filter((employee) => {
      const first = employee.name.first.toLowerCase();
      const last = employee.name.last.toLowerCase();
      if (
        first.startsWith(searchInput.toLowerCase()) ||
        last.startsWith(searchInput.toLowerCase())
      ) {
        return employee;
      }
    });

    this.setState({ filteredEmployees: filtered });
  };

  handleSort = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.getAttribute("value");

    let sorted = [];

    switch (value) {
      case "first":
        sorted = [...this.state.filteredEmployees];
        sorted.sort((a, b) => {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        });
        break;
      case "last":
        sorted = [...this.state.filteredEmployees];
        sorted.sort((a, b) => {
          if (a.name.last < b.name.last) {
            return -1;
          }
          if (a.name.last > b.name.last) {
            return 1;
          }
          return 0;
        });
        break;
      default:
    }

    this.setState({
      filteredEmployees: sorted,
    });
  };

  componentDidMount() {
    Api.getUsers().then((res) => {
      console.log(res.data.results);
      this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results,
      });
    });
  }

  render() {
    return (
      <Container>
        <Header />

        <SearchBar handleSearch={this.handleSearch} />
        <EmployeeTable
          handleSort={this.handleSort}
          filteredEmployees={this.state.filteredEmployees}
        />
      </Container>
    );
  }
}

export default App;
