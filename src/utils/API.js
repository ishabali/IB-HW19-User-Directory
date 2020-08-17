import axios from "axios";

const BASEURL = "https://dummy.restapiexample.com/api/v1/employees";

// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function() {
       return axios.get(BASEURL);
  }
};

