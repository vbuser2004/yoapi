import {
    CredentialsResponse_Schema,
    CredentialsResponse,
} from '../types/Authentication.js';

// Checks to see if current jwt is still valid
const isJwtExpired = (authExpire: number): boolean => {
    const timeDiff: number = authExpire - Math.floor(new Date().getTime());
    if (timeDiff <= 0) return true;
    return false;
};

// Checks to see if valid tokens exist in credentials
const isRefreshToken = (credentials: CredentialsResponse): boolean => {
    // Check if valid credentials
    const creds = CredentialsResponse_Schema.safeParse(credentials);

    if (creds.success) return true;

    return false;
};

// Updats time Authentication jwt expires, less the offset percentage
const getExpiresIn = (
    expires_in: number,
    offSet: number,
    request_time: number = Math.floor(new Date().getTime())
): number => {
    let internal_offSet: number;

    if (offSet > 90) {
        internal_offSet = 90;
        console.log('Offset percentage cannot exceed 90 Percent');
    } else {
        internal_offSet = offSet;
    }

    // Calculate new expires in by taking the offset % to reduce the additional time.
    const new_expires_In =
        request_time + expires_in * ((100 - internal_offSet) / 100);

    return new_expires_In;
};

export { isJwtExpired, isRefreshToken, getExpiresIn };
