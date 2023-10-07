import { z } from "zod";


const AuthenticationOptions_Schema = z.object({
    authURL: z.string().optional(),
    UAID: z.string(),
    secretKey: z.string()
})

type AuthenticationOptions = z.infer<typeof AuthenticationOptions_Schema>

// type AuthenticationOptions = {
//     authURL?: string;
//     UAID: string;
//     secretKey: string;
// }

type AuthenticationResponse = {
    state?: string;
    msg?: string;
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    refresh_token?: string;
    scope?: string[];
}

type Credentials = { 
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string[];
}


export {
    AuthenticationOptions,
    AuthenticationOptions_Schema,
    AuthenticationResponse,
    Credentials
}