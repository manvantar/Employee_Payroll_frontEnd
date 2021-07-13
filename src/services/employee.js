import axios from 'axios';
axios.defaults.baseURL = process.env.React_App_BASEURL;
let config = { headers: { 'Authorization': localStorage.getItem("token") } }

class Employee {

    /**
    * @description integrating FrontEnd request to Backend Employee Lists API using axious
    * @return response from the backend to Dashboard having Employee details
    */
    getAllEmployees = () => {
       return  axios.get("/employees", config);
    }

}

export default new Employee;