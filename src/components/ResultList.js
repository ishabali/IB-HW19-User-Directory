import React from "react";

function ResultList(props) {
  return (
    <table className="table">


      {props.results.map(result => (
        <table style="width:100%">
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td >
            <td>500000</td>
            <td>50</td>
          </tr>
        </table>
       
      ))}

    </table>
  );
}

export default ResultList;
