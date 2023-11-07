import 'dotenv/config';
import type { CredentialsResponse, RefreshTokenOptions } from '../types/Authentication.js';
declare const refresh: (refreshOptions: RefreshTokenOptions) => Promise<CredentialsResponse>;
export default refresh;
