import { baseBDDPRequest } from '../types/BasicDataPacket.js';

// Generate body to transmit to API
export const generateBody = (
    method: string,
    msgid: string = new Date().getTime().toString(),
    targetDevice?: string,
    token?: string,
    params?: string
) => {
    const body = {
        method,
        time: new Date().getTime().toString(),
        msgid,
        targetDevice,
        token,
        params,
    };

    const isBDDPRequest = baseBDDPRequest.safeParse(body);

    console.log('Body: ' + JSON.stringify(isBDDPRequest, null, 3));

    if (!isBDDPRequest.success) throw new Error('Invalid Request Body Data');

    return isBDDPRequest.data;
};
