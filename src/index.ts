import { CredentialsResponse, AuthenticationOptions_Schema, AuthenticationOptions } from './types/Authentication.js';

// const authoptions = {
//     UAID: process.env.YOLINK_UAID,
//     secretKey: process.env.YOLINK_SK
// }

class yoyoApi {

    private credentials: CredentialsResponse;
    private authOptions: AuthenticationOptions;
    private ApiURL: string;
    
    constructor (UAID: string, SecretKey: string, AuthenticationURL?: string, ApiURL?: string) {

        // Validate Authentication Details
        const isAuthOptions = AuthenticationOptions_Schema.safeParse({
            UAID,
            SecretKey,
            AuthURL: AuthenticationURL
        })

        // Assign Authentication Options
        if(isAuthOptions.success) { 
            this.authOptions = isAuthOptions.data;
        } else {
            throw new Error("Invalid Authentication Details")
        }

        // Assign alternative ApiURL
        if(ApiURL) {
            this.ApiURL = ApiURL
        }
    }

}

export default yoyoApi