import axios from 'axios';
axios.defaults.baseURL = process.env.React_App_BASEURL;

class User {

    /**
    * @description integrating FrontEnd request to Backend User Login API using axious
    * @param credentials i.e emailId and password
    * @return response from the backend to Login page
    */
    login = (credentials) => {
        return axios.post("/login", credentials)
    };

    /**
    * @description integrating FrontEnd request to Backend User Registration API using axious
    * @param credentials i.e firstName, lastName, emailId and password
    * @return response from the backend to Registartion page
    */
    SignUpData = (userData) => {
        return axios.post("/registration", userData)
    };
}
export default User;