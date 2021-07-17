import axios from 'axios';
axios.defaults.baseURL = process.env.React_App_BASEURL;

class Employee {

    /**
    * @description integrating FrontEnd request to Backend Employee Lists API using axious
    * @return response from the backend to Dashboard having Employee details
    */
    getAllEmployees = async () => {
        let config = { headers: { 'Authorization': localStorage.getItem("token") } }
        try {
            const res = await axios.get("/employees", config);
            return res;
        } catch (error) {
            return error;
        }
    }

    /**
    * @description integrating FrontEnd request to Backend Employee Data using axious
    * @return response from the backend to Dashboard having success or failure details
    */
    insertEmployees = async (data) => {
        let config = { headers: { 'Authorization': localStorage.getItem("token") } }
        try {
            const res = await axios.post("/add/employee", data, config );
            return res;
        } catch (error) {
            return error;
        }
    }

}

export default new Employee();