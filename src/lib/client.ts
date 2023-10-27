import yoyoApi from '../index.js';
import { Authenticated } from '../auth/index.js';
import { generateBody } from './genbody.js';

// Send request to API
export const sendRequestGen = async <T>(bddpPacket: T) => {
    const apiURL = yoyoApi.ApiURL;
    const isAuthenticated = await Authenticated();

    if (!isAuthenticated) return { msg: 'Authentication Error' }; // TODO: return auth error

    const authjwt = yoyoApi.Credentials.access_token;

    // const msgBody = generateBody({...bddpPacket});

    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${authjwt}`,
        },
        body: JSON.stringify({ ...bddpPacket }),
    });

    const data = await response.json();

    return data;
};

// Send request to API
export const sendRequest = async (
    method: string,
    msgid: string = new Date().getTime().toString(),
    targetDevice?: string,
    token?: string,
    params?: string
) => {
    const apiURL = yoyoApi.ApiURL;
    const isAuthenticated = await Authenticated();

    if (!isAuthenticated) return { msg: 'Authentication Error' }; // TODO: return auth error

    const authjwt = yoyoApi.Credentials.access_token;

    const msgBody = generateBody(method, msgid, targetDevice, token, params);

    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${authjwt}`,
        },
        body: JSON.stringify(msgBody),
    });

    const data = await response.json();

    return data;
};
