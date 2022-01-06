import axios from 'axios';
import * as constants from '../utils/constants';
import AuthService from './auth';

export default class UserService {
    async getUserDetails() {
        const authService = new AuthService();
        const token = authService.getToken();
        const url = constants.BACKEND_URL + constants.USER_URL;
        const config = {
            headers: { Authorization: `Token ${token}` }
        };
        let response;
        try {
            response = await axios.get(url, config);
        }catch(e){
            response = {error: "An error occurred"};
        }
        return response;
    }
}