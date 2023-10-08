import { z } from "zod";


const AuthenticationOptions_Schema = z.object({
    authURL: z.string(),
    UAID: z.string(),
    secretKey: z.string()
})

type AuthenticationOptions = z.infer<typeof AuthenticationOptions_Schema>


const AuthenticationResponseError_Schema = z.object({
    state: z.string(),
    msg: z.string()
});

type AuthenticationResponseError = z.infer<typeof AuthenticationResponseError_Schema>;

const Credentials_Schema = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
    refresh_token: z.string(),
    scope: z.string().array()
})

type Credentials = z.infer<typeof Credentials_Schema>


const CredentialsResponse_Schema = z.object({
    success: z.boolean(),
    message: z.string().optional(),
    request_time: z.number().optional(),
    data: Credentials_Schema.optional()    
})

type CredentialsResponse = z.infer<typeof CredentialsResponse_Schema>



export {
    AuthenticationOptions,
    AuthenticationOptions_Schema,
    AuthenticationResponseError,
    AuthenticationResponseError_Schema,
    Credentials,
    Credentials_Schema,
    CredentialsResponse,
    CredentialsResponse_Schema
}