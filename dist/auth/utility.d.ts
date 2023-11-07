import { Credentials, CredentialsResponse } from "../types/Authentication.js";
declare const fillInCredentials: (responsePackage: CredentialsResponse) => CredentialsResponse;
declare const isJwtExpired: (authExpire: number) => boolean;
declare const isRefreshToken: (credentials: Credentials) => boolean;
declare const getExpiresIn: (expires_in: number, offSet: number, request_time?: number) => number;
export { fillInCredentials, isJwtExpired, isRefreshToken, getExpiresIn };
