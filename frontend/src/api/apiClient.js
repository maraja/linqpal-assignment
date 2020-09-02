import axios from 'axios';

// import accessEnv from "#root/helpers/accessEnv"

const LINQPAL_BACKEND_API = 'http://localhost:8001/v1'

export default class LinqPalService {

    // CUSTOMERS
    static async fetchUsers() {
        const body = await axios.get(`${LINQPAL_BACKEND_API}/users`);
        return body.data.users;
    }

    static async createUser({ first_name, last_name, phone, full_address, ssn }) {
        return await axios.post(`${LINQPAL_BACKEND_API}/users`, { 
            first_name, last_name, phone, full_address, ssn
        });
    }

    static async authenticate({ email, password }) {
        return await axios.post(`${LINQPAL_BACKEND_API}/admin`, { 
            email, password
        });
    }

}