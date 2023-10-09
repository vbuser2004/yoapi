import 'dotenv/config'
import { 
    AuthenticationResponseError_Schema, 
    Credentials_Schema,
    CredentialsResponse,
    RefreshTokenOptions
} from "../types/Authentication.js"


const refreshToken = async (refreshOptions: RefreshTokenOptions): Promise<Response> => {
    
    const bodyData = {
        grant_type: 'refresh_token',
        client_id: refreshOptions.UAID,
        refresh_token: refreshOptions.refresh_token
    }

    const response = await fetch(refreshOptions.authURL, {
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

export const refresh = async (refreshOptions: RefreshTokenOptions ): Promise<CredentialsResponse> => {

    const refreshResponse = await refreshToken(refreshOptions);

    // Invalid response from server
    if(!refreshResponse) {
        return fillInCredentials({success: false, message: "Server Error", data: {}});
    }

    const isError = AuthenticationResponseError_Schema.safeParse(refreshResponse);

    // Error response from server
    if(isError.success) {
        // Error from login
        return fillInCredentials({success: false, message: "Authentication Error", data: {}})
    }

    const isCredentials = Credentials_Schema.safeParse(refreshResponse);

    if(isCredentials.success) {
        // Valid credentials
        return fillInCredentials({success: true, message: "", data: isCredentials.data })
    } else {
        return fillInCredentials({success: false, message: "Configuration Error", data: {}})
    }

}



// {
//     "code": "010104",
//     "time": 1696807531863,
//     "msgid": 1696807531863,
//     "method": "Hub.getState",
//     "desc": "Header Error!The token expired",
//     "data": {}
//   }