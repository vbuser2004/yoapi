import 'dotenv/config';
import { AuthenticationResponseError_Schema, Credentials_Schema, } from '../types/Authentication.js';
import { fillInCredentials } from './utility.js';
const refreshToken = async ({ UAID, refresh_token, authURL = process.env.YOLINK_AUTH_URL, }) => {
    const bodyData = {
        grant_type: 'refresh_token',
        client_id: UAID,
        refresh_token: refresh_token,
    };
    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'yoyoapi',
            'yoyoapi-Version': process.env.YOYOAPI_VERSION || '',
        },
        body: JSON.stringify(bodyData),
    });
    if (response.ok) {
        return await response.json();
    }
    else {
        return JSON.stringify({ state: 'error', msg: 'Invalid Parameters' });
    }
};
const refresh = async (refreshOptions) => {
    const refreshResponse = await refreshToken(refreshOptions);
    // Invalid response from server
    if (!refreshResponse) {
        return fillInCredentials({
            success: false,
            message: 'Server Error',
            data: undefined,
        });
    }
    const isError = AuthenticationResponseError_Schema.safeParse(refreshResponse);
    // Error response from server
    if (isError.success) {
        // Error from login
        return fillInCredentials({
            success: false,
            message: 'Authentication Error',
            data: undefined,
        });
    }
    const isCredentials = Credentials_Schema.safeParse(refreshResponse);
    if (isCredentials.success) {
        // Valid credentials
        return fillInCredentials({
            success: true,
            message: '',
            data: isCredentials.data,
        });
    }
    else {
        return fillInCredentials({
            success: false,
            message: 'Configuration Error',
            data: undefined,
        });
    }
};
export default refresh;
//# sourceMappingURL=refresh.js.map