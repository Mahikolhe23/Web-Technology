import axios from 'axios';

class UserServices {
    constructor() {
        this.url = "http://localhost:3000/";
    }
    getUser() {
        return axios.get(this.url + "student/get");
    }
}
export default new UserServices;