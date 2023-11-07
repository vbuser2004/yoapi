import 'dotenv/config';
import { AuthenticationOptions_Schema, AuthenticationResponseError_Schema, Credentials_Schema, } from '../types/Authentication.js';
import { fillInCredentials } from './utility.js';
const fetchToken = async (authOptions) => {
    const bodyData = {
        grant_type: 'client_credentials',
        client_id: authOptions.UAID,
        client_secret: authOptions.secretKey,
    };
    const response = await fetch(authOptions.authURL, {
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
const auth = async ({ authURL, UAID, secretKey, }) => {
    const isAuthOps = AuthenticationOptions_Schema.safeParse({
        authURL,
        UAID,
        secretKey,
    });
    if (!isAuthOps.success) {
        return fillInCredentials({
            success: false,
            message: 'Configuration Error',
            data: undefined,
        });
    }
    const authResponse = await fetchToken(isAuthOps.data);
    // Invalid response from server
    if (!authResponse) {
        return fillInCredentials({
            success: false,
            message: 'Server Error',
            data: undefined,
        });
    }
    const isError = AuthenticationResponseError_Schema.safeParse(authResponse);
    // Error response from server
    if (isError.success) {
        // Error from login
        return fillInCredentials({
            success: false,
            message: JSON.stringify(isError.data),
            data: undefined,
        });
    }
    const isCredentials = Credentials_Schema.safeParse(authResponse);
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
export default auth;
//# sourceMappingURL=token.js.map