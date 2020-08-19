import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import "../styles/Result.css";
import FilterByAge from "./FilterByAge";

class ResultContainer extends Component {
  state = {
    result: [],
    filter: "",
    filterBy: "Name",
    currentSort: "default",
    sortField: ""
  };

  // When this component mounts, search the API for employees data

  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({
            result: res.data.data.map((e, i) => ({
              employee_name: e.employee_name,
              employee_salary: e.employee_salary,
              employee_age: e.employee_age,
              key: i
            }))
        })
      })
      .catch(err => console.log(err));
  }

  filterEmployees = (searchkey) => {
    console.log("***in Filter*******");
    console.log(searchkey);
    console.log(this.state.result);
    const filterResult = this.state.result.filter(person => person.employee_name === searchkey)
    this.setState({
      result:filterResult
    })
  }

  // When the form is submitted, search the API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);

    //filter function here
    this.filterEmployees(value);
    this.setState({
      [name]: value
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };

  // testFunction = () => {
  //   { console.log("************") }
  //   { console.log(this.state.result[0].picture) }
  //   { console.log("+++++++++++++") }
  // }
  // filtertestfunction = () => {
  //   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  //   const result2 = words.filter(word => word.includes("it"));
  //   console.log(result2);
  // }

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);
    //filter function be called here
    // this.filterEmployees(value);
    // this.filterEmployees(this.state.search);
    this.setState({
      [name]: value
    });
  };

  handleSortByName = event => {
    event.preventDefault();
    console.log(event);
    console.log("*****Sort by Name*****");
    const sortResult = (this.state.result).sort((a,b) => (a.employee_name > b.employee_name) ? 1 : -1)
    console.log("sortResult",sortResult)
    this.setState({
      result:sortResult 
    })
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Employee Directory</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
          <div className="col-md-6">
            <FilterByAge
              array1={this.state.result}

            />
          </div>
        </div>

        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th >Name <button onClick={this.handleSortByName} className="btn btn-primary mt-3">Sort A to Z</button></th>
                <th scope="col">Salary</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
            {[...this.state.result].map((item) =>
              <EmployeeCard
                name={item.employee_name}
                salary={item.employee_salary}
                age={item.employee_age}                
                key={item.key}
              />
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ResultContainer;