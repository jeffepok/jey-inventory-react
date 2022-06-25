import axios from 'axios';
import * as constants from '../utils/constants';
import AuthService from './auth';

export default class ItemsService {
    async getItems() {
        const authService = new AuthService();
        const token = authService.getToken();
        const url = constants.BACKEND_URL + constants.ITEMS_URL;
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