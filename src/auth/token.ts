import 'dotenv/config'
import { AuthenticationOptions, AuthenticationOptions_Schema } from "../types/Authentication.js"


const fetchToken = async (UAID: string, secretKey: string, authURL: string): Promise<Response> => {

    console.log('Options: ' + UAID, secretKey, authURL)

    const response = await fetch(authURL, {
        method: "POST",
        headers: {
            ContentType: "application/json"
        },
        body: JSON.stringify({
            grant_type: "client_credentials",
            client_id: UAID,
            client_secret: secretKey
        })
    })


    return await response.json();

}

export const auth = async ({ UAID, secretKey, authURL = process.env.YOLINK_AUTH_URL!}: AuthenticationOptions ) => {


    const authResponse = await fetchToken(UAID, secretKey, authURL);

    // const isValid = AuthenticationOptions_Schema.safeParse(authResponse);

    console.log(authResponse);


}