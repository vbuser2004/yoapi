import 'dotenv/config';
import type { AuthenticationOptions, CredentialsResponse } from '../types/Authentication.js';
declare const auth: ({ authURL, UAID, secretKey, }: AuthenticationOptions) => Promise<CredentialsResponse>;
export default auth;
