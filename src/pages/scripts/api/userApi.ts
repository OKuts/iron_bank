import axios from 'axios';
import { ILoginBody, IRegistrationBody, IUserResponse } from '../types';

const API_URL = 'https://lab.lectrum.io/js2/api';

export const userApi = Object.freeze({
    register: async (payload:IRegistrationBody): Promise<IUserResponse> => {
        const { data } = await axios.post(`${API_URL}/ironbank/register`, payload);

        return data;
    },

    login: async (payload: ILoginBody): Promise<IUserResponse> => {
        const { data } = await axios.post(`${API_URL}/ironbank/login`, payload);

        return data;
    },

    verify: async (token: string) => {
        const  data = await axios.get(`${API_URL}/ironbank/auth`,
            {
                headers: {
                    'x-token': token,
                },
            });

        return data;
    },

    profile: async (token: string) => {
        const  { data } = await axios.get(`${API_URL}/ironbank/profile`,
            {
                headers: {
                    'x-token': token,
                },
            });

        return data;
    },
});
