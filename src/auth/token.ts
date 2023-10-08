import 'dotenv/config'
import { 
    AuthenticationOptions, 
    AuthenticationOptions_Schema, 
    AuthenticationResponseError_Schema, 
    Credentials_Schema,
    CredentialsResponse
} from "../types/Authentication.js"


const fetchToken = async (authOptions: AuthenticationOptions): Promise<Response> => {
    

    const bodyData = {
        grant_type: 'client_credentials',
        client_id: authOptions.UAID,
        client_secret: authOptions.secretKey
    }

    const response = await fetch(authOptions.authURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
            'User-Agent': 'yoyoapi',
            'yoyoapi-Version': process.env.YOYOAPI_VERSION,
        },
        body: JSON.stringify(bodyData)
    });

    if (response.ok) {
        return await response.json()
    } else {
        return null
    }

}

const fillInCredentials = async (responsePackage: CredentialsResponse):Promise<CredentialsResponse> => {

    const creds = {
        success: responsePackage.success,
        message: responsePackage.message,
        request_time: Math.floor((new Date()).getTime() / 1000),
        data: { ...responsePackage.data }
    }

    return creds
}

export const auth = async ({ UAID, secretKey, authURL = process.env.YOLINK_AUTH_URL!}: AuthenticationOptions ): Promise<CredentialsResponse> => {

    const authResponse = await fetchToken({UAID, secretKey, authURL});

    // Invalid response from server
    if(!authResponse) {
        return fillInCredentials({success: false, message: "Server Error", data: {}});
    }

    const isError = AuthenticationResponseError_Schema.safeParse(authResponse);

    // Error response from server
    if(isError.success) {
        // Error from login
        return fillInCredentials({success: false, message: "Authentication Error", data: {}})
    }

    const isCredentials = Credentials_Schema.safeParse(authResponse);

    if(isCredentials.success) {
        // Valid credentials
        return fillInCredentials({success: true, message: "", data: isCredentials.data })
    } else {
        return fillInCredentials({success: false, message: "Configuration Error", data: {}})
    }

}