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

  allEmpl = []
  
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
          this.allEmpl = this.state.result;
        })
      .catch(err => console.log(err));
  }

  searchEmployee = (searchkey) => {
    console.log("***in Filter*******");
    console.log(searchkey);
    console.log(this.state.result);
    console.log("filter", this.allEmpl)
      if (!searchkey){
        this.setState({
          result:this.allEmpl
        })
      } else {
        const filterResult = this.allEmpl.filter(person => person.employee_name === searchkey)
        console.log("filterResult",filterResult);
        this.setState({
          result:filterResult
        })
    }
  }

  handleAgeForm = event => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  };

  // When the form is submitted, search the API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);
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

  handleAgeFormSubmit = event => {
    event.preventDefault();
    this.getListByAge ();
  };

  getListByAge = () => {
        console.log("**********");
        console.log(this.state.minAge);
        console.log(this.state.maxAge);
        const employees = this.allEmpl;
        const minAge = this.state.minAge;
        const maxAge = this.state.maxAge;
        console.log("getPrposFunc2",employees)
        let ageArray = [];
        if (!minAge || !maxAge){
          console.log("no age range")
          for (const employee of employees) { 
            ageArray.push(employee)
        }
          // this.setState({
          //   result:employees
          // })
          console.log("this.state.result",this.state.result)
        } else {
          for (const employee of employees) {
              if (employee.employee_age >= minAge && employee.employee_age <= maxAge) {
                  ageArray.push(employee)
              }
          }
        }
        console.log(ageArray)
       
        // let ageArray =  employees.filter(function(employee) {
        //     return employee.employee_age >= minAge && employee.employee_age <= maxAge;
        // });
        this.setState({
            result: ageArray 
          })
        console.log(this.state)
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
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
          <div className="col-md-6">
            <FilterByAge
              handleAgeForm={this.handleAgeForm}
              getListByAge={this.handleAgeFormSubmit}
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