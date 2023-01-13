import axios from 'axios';

class UserServices {
    constructor() {
        this.url = "http://localhost:3000/";
    }
    getUser() {
        return axios.get(this.url + "student/get");
    }
    getUserbyID(id) {
        return axios.get(this.url + "student/" + id);
    }
    addUser(user) {
        return axios.post(this.url + "adduser"+ user);
    }
}
export default new UserServices;