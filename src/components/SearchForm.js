import React from "react";

function SearchForm(props) {
  // console.log(props)
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
          <div className="form-group col-xs-6">
            <div className="row">
              <input
                onChange={props.handleInputChange}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for an Employee"
                id="search"
              />
            </div>
          </div>
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
