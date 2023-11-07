import yoyoApi from '../index.js';
import refresh from './refresh.js';
import auth from './token.js';
import * as authutil from './utility.js';
const updateAuthData = (credresponse) => {
    if (credresponse.success) {
        yoyoApi.Credentials = { ...credresponse.data };
        yoyoApi.AuthExpire = authutil.getExpiresIn(yoyoApi.Credentials.expires_in, yoyoApi.OffSet, credresponse.request_time);
    }
    else {
        yoyoApi.AuthExpire = -1;
    }
};
export const Authenticated = async () => {
    let credresponse;
    const creds = yoyoApi.Credentials;
    const authExpires = yoyoApi.AuthExpire;
    const authOptions = yoyoApi.AuthOptions;
    // Check if current Auth has expired
    const hasExpired = authutil.isJwtExpired(authExpires);
    if (!hasExpired)
        return true;
    // Check if refresh token exists
    const refreshTokenExists = authutil.isRefreshToken(creds);
    if (refreshTokenExists) {
        // Get new token
        console.log('Refresh Token');
        credresponse = await refresh({
            authURL: authOptions.authURL,
            UAID: authOptions.UAID,
            refresh_token: creds.refresh_token,
        });
    }
    else {
        console.log('Auth Token');
        credresponse = await auth({ ...authOptions });
    }
    updateAuthData(credresponse);
    return credresponse.success;
};
//# sourceMappingURL=index.js.map