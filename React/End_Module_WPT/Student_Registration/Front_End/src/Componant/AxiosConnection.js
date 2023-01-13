import axios from 'axios';

class UserServices {
    constructor() {
        this.url = "http://localhost:4000/";
    }
    getUser() {
        return axios.get(this.url + "student/data");
    }
}
export default new UserServices;