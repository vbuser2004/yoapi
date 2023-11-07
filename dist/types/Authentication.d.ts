import { z } from 'zod';
declare const ApiUrl_Schema: z.ZodString;
export type ApiUrl = z.infer<typeof ApiUrl_Schema>;
declare const AuthenticationOptions_Schema: z.ZodObject<{
    authURL: z.ZodString;
    UAID: z.ZodString;
    secretKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    authURL: string;
    UAID: string;
    secretKey: string;
}, {
    authURL: string;
    UAID: string;
    secretKey: string;
}>;
export type AuthenticationOptions = z.infer<typeof AuthenticationOptions_Schema>;
declare const AuthenticationResponseError_Schema: z.ZodObject<{
    state: z.ZodString;
    msg: z.ZodString;
}, "strip", z.ZodTypeAny, {
    state: string;
    msg: string;
}, {
    state: string;
    msg: string;
}>;
export type AuthenticationResponseError = z.infer<typeof AuthenticationResponseError_Schema>;
declare const Credentials_Schema: z.ZodObject<{
    access_token: z.ZodString;
    token_type: z.ZodString;
    expires_in: z.ZodNumber;
    refresh_token: z.ZodString;
    scope: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string[];
}, {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string[];
}>;
export type Credentials = z.infer<typeof Credentials_Schema>;
declare const CredentialsResponse_Schema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
    request_time: z.ZodOptional<z.ZodNumber>;
    data: z.ZodOptional<z.ZodObject<{
        access_token: z.ZodString;
        token_type: z.ZodString;
        expires_in: z.ZodNumber;
        refresh_token: z.ZodString;
        scope: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        access_token: string;
        token_type: string;
        expires_in: number;
        refresh_token: string;
        scope: string[];
    }, {
        access_token: string;
        token_type: string;
        expires_in: number;
        refresh_token: string;
        scope: string[];
    }>>;
}, "strip", z.ZodTypeAny, {
    success: boolean;
    message?: string | undefined;
    request_time?: number | undefined;
    data?: {
        access_token: string;
        token_type: string;
        expires_in: number;
        refresh_token: string;
        scope: string[];
    } | undefined;
}, {
    success: boolean;
    message?: string | undefined;
    request_time?: number | undefined;
    data?: {
        access_token: string;
        token_type: string;
        expires_in: number;
        refresh_token: string;
        scope: string[];
    } | undefined;
}>;
export type CredentialsResponse = z.infer<typeof CredentialsResponse_Schema>;
declare const RefreshTokenOptions_Schema: z.ZodObject<{
    authURL: z.ZodString;
    UAID: z.ZodString;
    refresh_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    authURL: string;
    UAID: string;
    refresh_token: string;
}, {
    authURL: string;
    UAID: string;
    refresh_token: string;
}>;
export type RefreshTokenOptions = z.infer<typeof RefreshTokenOptions_Schema>;
export { ApiUrl_Schema, AuthenticationOptions_Schema, AuthenticationResponseError_Schema, Credentials_Schema, CredentialsResponse_Schema, RefreshTokenOptions_Schema, };
