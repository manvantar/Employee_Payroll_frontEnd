import axios from 'axios';
axios.defaults.baseURL = process.env.React_App_BASEURL;

class User {

    login = (credentials) => {
        return axios.post("/login", credentials)
    };

    SignUpData = (userData) => {
        return axios.post("/registration", userData)
    };
}
export default User;