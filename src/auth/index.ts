import yoyoApi from '../index.js';
import { CredentialsResponse } from '../types/Authentication.js';
import refresh from './refresh.js';
import auth from './token.js';
import * as authutil from './utility.js';

const updateAuthData = (credresponse: CredentialsResponse): void => {
    const offSet = parseInt(process.env.YOYOAPI_AUTH_OFFSET_PERCENT) || 20;

    if (credresponse.success) {
        yoyoApi.Credentials = { ...credresponse };
        yoyoApi.AuthExpire = authutil.getExpiresIn(
            credresponse.data.expires_in,
            offSet,
            credresponse.request_time
        );
    } else {
        yoyoApi.Credentials = {
            success: false,
            data: undefined,
            message: '',
            request_time: Math.floor(new Date().getTime()),
        };
        yoyoApi.AuthExpire = 0;
    }
};

export const Authenticated = async (): Promise<boolean> => {
    let credresponse: CredentialsResponse;
    const creds = yoyoApi.Credentials;
    const authExpires = yoyoApi.AuthExpire;
    const authOptions = yoyoApi.AuthOptions;

    // Check if current Auth has expired
    const hasExpired = authutil.isJwtExpired(authExpires);
    if (!hasExpired) return true;

    // Check if refresh token exists
    const refreshTokenExists = authutil.isRefreshToken(creds);

    if (refreshTokenExists) {
        // Get new token
        console.log('Refresh Token');
        credresponse = await refresh({
            authURL: authOptions.authURL,
            UAID: authOptions.UAID,
            refresh_token: creds.data.refresh_token,
        });
    } else {
        console.log('Auth Token');
        credresponse = await auth({ ...authOptions });
    }

    updateAuthData(credresponse);

    return credresponse.success;
};
