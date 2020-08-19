import React, {Component} from "react"

class FilterByAge extends Component {
  // Setting the component's initial state
  state = {
    minAge: "",
    maxAge: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
    
//    getProps = (this.props) => {
//     //    const val = props;
//        console.log("getPrposFunc",this.props)
//    } 
 

    getListByAge = event => {
        event.preventDefault();
            console.log(this.state)
            // const value = event.target.value;
            // const name = event.target.name;
            console.log("**********");
            console.log(this.state.minAge);
            console.log(this.state.maxAge);
            // this.getProps(this.props)
            const employees = this.props.array1;
            const minAge = this.state.minAge;
            const maxAge = this.state.maxAge;
            console.log("getPrposFunc2",employees)
            //filter function here
            let ageArray =  employees.filter(function(employee) {
                return employee.employee_age >= minAge && employee.employee_age <= maxAge;
            });
            console.log(ageArray)
            this.setState({
                result: ageArray 
              })

    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="filterAge">Filter by Age:</label>
                    <div className="row"> 
                        <div className="form-group col-xs-6">
                            <input className="form-control input-group-lg reg_name" 
                                // id="min"
                                type="number" 
                                name="minAge"
                                placeholder="Min Age"
                                value = {this.state.minAge}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group col-xs-6">
                            <input className="form-control input-group-lg reg_name" 
                                // id="max"
                                type="number" 
                                name="maxAge"
                                placeholder="Max Age"
                                value = {this.state.maxAge}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <button onClick={this.getListByAge} className="btn btn-primary mt-3">
                    Filter
                    </button>
                </div>
            </form>
            )
        }
    }

export default FilterByAge