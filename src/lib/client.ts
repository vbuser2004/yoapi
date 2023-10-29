import yoyoApi from '../index.js';
import {
    baseBDDP,
    baseBUDP,
    baseBUDP_Schema,
} from '../types/BasicDataPacket.js';
import { Authenticated } from '../auth/index.js';
import { generateBody } from './genbody.js';

// Send request to API
export const sendRequest = async <T extends baseBDDP>(bddpPacket: T) => {
    const apiURL = yoyoApi.ApiURL;

    // Ensure authentication is valid
    const isAuthenticated = await Authenticated();

    if (!isAuthenticated) throw new Error('Authentication Error');

    // Generate body
    const msgBody = generateBody({ ...bddpPacket });

    console.log('Message Body: ' + JSON.stringify(msgBody));

    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${yoyoApi.Credentials.access_token}`,
        },
        body: JSON.stringify(msgBody),
    });

    const dataResp = await response.json();

    console.log(JSON.stringify(dataResp, null, 3));

    const isValidDataResp = baseBUDP_Schema.partial().safeParse(dataResp);

    if (!isValidDataResp.success) throw new Error('Invalid Response Format');

    return isValidDataResp.data;
};

// Send request to API
// export const sendRequest = async (
//     method: string,
//     msgid: string = new Date().getTime().toString(),
//     targetDevice?: string,
//     token?: string,
//     params?: string
// ) => {
//     const apiURL = yoyoApi.ApiURL;
//     const isAuthenticated = await Authenticated();

//     if (!isAuthenticated) return { msg: 'Authentication Error' }; // TODO: return auth error

//     const authjwt = yoyoApi.Credentials.access_token;

//     const msgBody = generateBody(method, msgid, targetDevice, token, params);

//     const response = await fetch(apiURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             authorization: `Bearer ${authjwt}`,
//         },
//         body: JSON.stringify(msgBody),
//     });

//     const data = await response.json();

//     return data;
// };
