import axios from "axios";
axios.defaults.baseURL = process.env.React_App_BASEURL;

class Employee {

  /**
   * @description Method to return token from local storage
   * @return token within headers
   */
  getToken = () => {
    const headers = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    return headers;
  };

  /**
   * @description integrating FrontEnd request to Backend Employee Lists API using axious
   * @return response from the backend to Dashboard having Employee details
   */
  getAllEmployees = async () => {
    const headers = this.getToken();
    try {
      const res = await axios.get("/employees", headers);
      return res;
    } catch (error) {
      return error;
    }
  };

  /**
   * @description integrating FrontEnd request to Backend to insert Employee Data using axious
   * @param employee object containg new data is passed
   * @return response from the backend to Dashboard having success or failure details
   */
  insertEmployees = async (data) => {
    const headers = this.getToken();
    try {
      const res = await axios.post("/add/employee", data, headers);
      return res;
    } catch (error) {
      return error;
    }
  };

  /**
   * @description integrating FrontEnd request to Backend to Delete Employee Data using axious
   * @param employeeId is passed
   * @return response from the backend to Dashboard having success or failure details
   */
  deleteEmployee = async (employeeId) => {
    const headers = this.getToken();
    try {
      const res = await axios.delete("/delete/employee/" + employeeId, headers);
      return res;
    } catch (error) {
      return error;
    }
  };

  /**
   * @description integrating FrontEnd request to Backend to update an Employee Data using axious
   * @param employee object containg Id with new data is passed
   * @return response from the backend to Dashboard having success or failure details for update
   */
   updateEmployee = async (employeeData) => {
    const headers = this.getToken();
    try {
      const res = await axios.put("/update/employee/" + employeeData._id, employeeData, headers);
      return res;
    } catch (error) {
      return error;
    }
  };

}

export default new Employee();
