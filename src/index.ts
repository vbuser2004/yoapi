import {
    CredentialsResponse,
    AuthenticationOptions_Schema,
    AuthenticationOptions,
} from './types/Authentication.js';

import { Authenticated } from './auth/index.js';
import { sendRequest } from './lib/client.js';

class yoyoApi {
    // VARIABLES
    static Credentials: CredentialsResponse;
    static ApiURL: string;
    static AuthenticationURL: string;
    static AuthOptions: AuthenticationOptions;
    static AuthExpire: number = 0; //Expiration time of the current credentials - defaults to 0

    // CONSTRUCTOR
    constructor(
        UAID: string,
        SecretKey: string,
        AuthenticationURL: string = process.env.YOSMART_AUTH_URL,
        ApiURL: string = process.env.YOSMART_API_URL
    ) {
        // Validate Authentication Details
        const isAuthOptions = AuthenticationOptions_Schema.safeParse({
            UAID,
            secretKey: SecretKey,
            authURL: AuthenticationURL,
        });

        // Assign Authentication Options
        if (isAuthOptions.success) {
            yoyoApi.AuthOptions = isAuthOptions.data;
        } else {
            throw new Error('Invalid Authentication Details');
        }

        yoyoApi.ApiURL = ApiURL;
        yoyoApi.AuthenticationURL = AuthenticationURL;
    }

    // FUNCTIONS

    async ManualAuthentication(): Promise<boolean> {
        const isAuthenticated: boolean = await Authenticated();

        return isAuthenticated;
    }

    async SendRequest(
        method: string,
        msgid: string,
        deviceId: string,
        token: string
    ): Promise<string> {
        return sendRequest(method, msgid, deviceId, token);
    }
}

export default yoyoApi;
