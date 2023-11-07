import { z } from 'zod';
const ApiUrl_Schema = z.string().url();
const AuthenticationOptions_Schema = z.object({
    authURL: z.string().url(),
    UAID: z.string(),
    secretKey: z.string(),
});
const AuthenticationResponseError_Schema = z.object({
    state: z.string(),
    msg: z.string(),
});
const Credentials_Schema = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
    refresh_token: z.string(),
    scope: z.string().array(),
});
const CredentialsResponse_Schema = z.object({
    success: z.boolean(),
    message: z.string().optional(),
    request_time: z.number().optional(),
    data: Credentials_Schema.optional(),
});
const RefreshTokenOptions_Schema = z.object({
    authURL: z.string().url(),
    UAID: z.string(),
    refresh_token: z.string(),
});
export { ApiUrl_Schema, AuthenticationOptions_Schema, AuthenticationResponseError_Schema, Credentials_Schema, CredentialsResponse_Schema, RefreshTokenOptions_Schema, };
//# sourceMappingURL=Authentication.js.map