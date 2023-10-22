import {
    Credentials,
    AuthenticationOptions_Schema,
    AuthenticationOptions,
    ApiUrl_Schema,
} from './types/Authentication.js';

import { Authenticated } from './auth/index.js';
import { sendRequest } from './lib/client.js';

class yoyoApi {
    // VARIABLES
    static Credentials: Credentials;
    static ApiURL: string;
    static AuthenticationURL: string;
    static AuthOptions: AuthenticationOptions;
    static AuthExpire: number = -1; //Expiration time of the current credentials - defaults to 0
    static OffSet: number;

    // CONSTRUCTOR
    constructor(
        UAID: string,
        SecretKey: string,
        AuthenticationURL: string = 'https://api.yosmart.com/open/yolink/token',
        ApiURL: string = 'https://api.yosmart.com/open/yolink/v2/api',
        OffSetPercentage: number = 20
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
            yoyoApi.AuthenticationURL = isAuthOptions.data.authURL;
        } else {
            throw new Error('Invalid Authentication Details');
        }

        const isApiUrl = ApiUrl_Schema.safeParse(ApiURL);

        if (isApiUrl.success) {
            yoyoApi.ApiURL = isApiUrl.data;
        } else {
            throw new Error('Invalid API Url');
        }

        yoyoApi.OffSet = OffSetPercentage;
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
