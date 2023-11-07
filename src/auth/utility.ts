import {
  CredentialsResponse_Schema,
  Credentials,
  CredentialsResponse,
} from "../types/Authentication.js";

// Completes Credential Response
const fillInCredentials = (
  responsePackage: CredentialsResponse
): CredentialsResponse => {
  const creds = {
    success: responsePackage.success,
    message: responsePackage.message,
    request_time: Math.floor(new Date().getTime()),
    data: responsePackage.data,
  };

  return creds;
};

// Checks to see if current jwt is still valid
const isJwtExpired = (authExpire: number): boolean => {
  if (authExpire < 0) return true;

  const timeDiff: number = authExpire - Math.floor(new Date().getTime());

  if (timeDiff <= 0) return true;

  return false;
};

// Checks to see if valid tokens exist in credentials
const isRefreshToken = (credentials: Credentials): boolean => {
  // Check if valid credentials
  const creds = CredentialsResponse_Schema.safeParse(credentials);

  return creds.success;
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
    console.log("Offset percentage cannot exceed 90 Percent");
  } else {
    internal_offSet = offSet;
  }

  const exp_in = expires_in * 1000; // Converts expires seconds to milliseconds

  // Calculate new expires in by taking the offset % to reduce the additional time.
  const new_expires_In =
    request_time + exp_in * ((100 - internal_offSet) / 100);

  return new_expires_In;
};

export { fillInCredentials, isJwtExpired, isRefreshToken, getExpiresIn };
