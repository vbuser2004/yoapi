import { z } from 'zod';

const ApiUrl_Schema = z.string().url().optional();

export type ApiUrl = z.infer<typeof ApiUrl_Schema>;

const AuthenticationOptions_Schema = z.object({
    authURL: z.string().url(),
    UAID: z.string(),
    secretKey: z.string(),
});

export type AuthenticationOptions = z.infer<
    typeof AuthenticationOptions_Schema
>;

const AuthenticationResponseError_Schema = z.object({
    state: z.string(),
    msg: z.string(),
});

export type AuthenticationResponseError = z.infer<
    typeof AuthenticationResponseError_Schema
>;

const Credentials_Schema = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
    refresh_token: z.string(),
    scope: z.string().array(),
});

export type Credentials = z.infer<typeof Credentials_Schema>;

const CredentialsResponse_Schema = z.object({
    success: z.boolean(),
    message: z.string().optional(),
    request_time: z.number().optional(),
    data: Credentials_Schema.optional(),
});

export type CredentialsResponse = z.infer<typeof CredentialsResponse_Schema>;

const RefreshTokenOptions_Schema = z.object({
    authURL: z.string().url(),
    UAID: z.string(),
    refresh_token: z.string(),
});

export type RefreshTokenOptions = z.infer<typeof RefreshTokenOptions_Schema>;

export {
    ApiUrl_Schema,
    AuthenticationOptions_Schema,
    AuthenticationResponseError_Schema,
    Credentials_Schema,
    CredentialsResponse_Schema,
    RefreshTokenOptions_Schema,
};
