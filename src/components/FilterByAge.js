// import React, {Component} from "react"

// class FilterByAge extends Component {
  // Setting the component's initial state
//   state = {
//     minAge: "",
//     maxAge: ""
//   };

import React from "react";

function FilterByAge(props) {

//   handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // let value = event.target.value;
    // const name = event.target.name;

    // Updating the input's state
    // this.setState({
    //   [name]: value
    // });
//   };
    
//    getProps = (this.props) => {
//     //    const val = props;
//        console.log("getPrposFunc",this.props)
//    } 
     // render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="filterAge">Filter by Age:</label>
                    <div className="row"> 
                        <div className="form-group col-xs-6">
                            <input className="form-control input-group-lg reg_name" 
                                type="number" 
                                name="minAge"
                                placeholder="Min Age"
                                // value = {props.minAge}
                                onChange={props.handleAgeForm}
                            />
                        </div>
                        <div className="form-group col-xs-6">
                            <input className="form-control input-group-lg reg_name" 
                                type="number" 
                                name="maxAge"
                                placeholder="Max Age"
                                // value = {props.maxAge}
                                onChange={props.handleAgeForm}
                            />
                        </div>
                    </div>
                    <button onClick={props.getListByAge} className="btn btn-primary mt-3">
                    Filter
                    </button>
                </div>
            </form>
            )
        }
    // }

export default FilterByAge