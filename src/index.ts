import {
  CredentialsResponse,
  AuthenticationOptions_Schema,
  AuthenticationOptions,
} from "./types/Authentication.js";

import auth from "./auth/token.js";

// const authoptions = {
//     UAID: process.env.YOLINK_UAID,
//     secretKey: process.env.YOLINK_SK
// }

class yoyoApi {
  // PUBLIC VARIABLES
  public credentials: CredentialsResponse;
  public ApiURL: string;
  public AuthenticationURL: string;
  private authOptions: AuthenticationOptions;
  private AuthExpire: number; //Expiration time of the current credentials

  // CONSTRUCTOR
  constructor(
    UAID: string,
    SecretKey: string,
    AuthenticationURL: string = process.env.YOSMART_AUTH_URL,
    ApiURL: string = process.env.YOSMART_API_URL
  ) {
    // Validate Authentication Details
    const isAuthOptions = AuthenticationOptions_Schema.safeParse({
      UAID,
      SecretKey,
      AuthURL: AuthenticationURL,
    });

    // Assign Authentication Options
    if (isAuthOptions.success) {
      this.authOptions = isAuthOptions.data;
    } else {
      throw new Error("Invalid Authentication Details");
    }

    this.ApiURL = ApiURL;
    this.AuthenticationURL = AuthenticationURL;
  }

  // MODULES
  async ManualAuthentication() {
    await auth({ ...this.authOptions });
  }
}

export default yoyoApi;
