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

    async SendRequest(): Promise<string> {
        return sendRequest(
            'Outlet.getState',
            '1234',
            'gh',
            '6BEC61702A5AED0F064E64D58D909CC6'
        );
    }
}

export default yoyoApi;
