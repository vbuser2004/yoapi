import getTokens from "./src/auth/token";
// import dotenv from 'dotenv';

// dotenv.config();


class yoyoAPI {

  private baseURL: string;
  private authURL: string;
  private UAID: string;
  private SecretKey: string;

  public constructor(
    UAID: string,
    SK: string,
    baseURL: string = 'https://api.yosmart.com/open/yolink/v2/api',
    authURL: string = 'https://api.yosmart.com/open/yolink/token'
  ) {

    this.baseURL = baseURL;
    this.authURL = authURL;
    this.UAID = UAID;
    this.SecretKey = SK;
  }

  private async getCredentials():Promise<void> {
    try {
      const credentials = await getTokens(this.authURL, this.UAID, this.SecretKey);
      return credentials;
    }
  }
}
