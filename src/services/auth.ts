import axios from 'axios';
import * as constants from "../utils/constants";
import { User } from '../interfaces';

export default class AuthService {

    async login(username:string , password:string) {
        const data:User = {
            username: username,
            password: password
        }
        const url = constants.BACKEND_URL + constants.LOGIN_URL;

        let response = await axios.post(url, data);
        return response;
    }
    logout () {
        try {
            localStorage.removeItem("token");
            return true;
        }catch (e) {
            return false
        }
    }
    async verifyToken() {
        const token = this.getToken();
        const url = constants.BACKEND_URL + constants.VERIFY_TOKEN_URL;
        const config = {
            headers: { Authorization: `Token ${token}` }
        };
        let verified = false;
        try {
            let response = await axios.get(url, config);
            if (response.status === 200) {
                verified = true;
            }
        } catch (e) {
            verified = false
        }
        return verified;
    }

    setToken(token) {
        try {
            localStorage.setItem('token', token);
            return true;
        } catch (e) {
            return false;
        }
    }
    getToken() {
        const token = localStorage.getItem('token');
        return token;
    }
    removeToken() {
        try {
            localStorage.removeItem('token');
            return true;
        } catch (e) {
            return false;
        }
    }

}

