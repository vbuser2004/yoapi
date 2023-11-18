import yoyoApi from '../../index.js';
import { baseBDDP, baseBUDP_Schema } from '../../types/BasicDataPacket.js';
import { Authenticated } from '../../auth/index.js';
import { generateBody } from './genbody.js';
import { ApiError, ApiError_Schema } from '../../types/ApiError.js';
import { generateError } from '../utility/createerror.js';

// Send request to API
export const sendRequest = async <T extends baseBDDP>(bddpPacket: T) => {
    const apiURL = yoyoApi.ApiURL;
    let errorResp: ApiError;

    // Ensure authentication is valid
    const isAuthenticated = await Authenticated();

    if (!isAuthenticated) {
        const errorText = generateError(
            '700103',
            (bddpPacket.msgid = new Date().getTime().toString()),
            bddpPacket.method
        );

        return { success: false, data: { ...errorText } };
    }
    // Generate body
    const msgBody = generateBody({ ...bddpPacket });

    if (msgBody.method == 'error') {
        errorResp = generateError(
            '700102',
            bddpPacket.msgid!,
            bddpPacket.method
        );

        return { success: false, data: { ...errorResp } };
    }

    // POST to API
    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${yoyoApi.Credentials.access_token}`,
        },
        body: JSON.stringify(msgBody),
    });

    // Get Data Response
    const dataResp = await response.json();

    // Check if apiError
    const apiError = ApiError_Schema.safeParse(dataResp);

    if (apiError.success) {
        return { success: false, data: { ...dataResp } };
    }

    // No Error - check if valid Basic Data Response
    const isValidDataResp = baseBUDP_Schema.partial().safeParse(dataResp);

    if (isValidDataResp.success) {
        return { success: true, data: { ...dataResp } };
    }

    // Response is not valid or an error so throw new error
    errorResp = generateError('700101', msgBody.msgid!, msgBody.method);

    return { success: false, data: { ...errorResp } };
};
