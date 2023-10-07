import { IAuthResponse } from "../interfaces/Authentication";

async function getTokens(
  authURL: string,
  UAID: string,
  SecretKey: string
): Promise<IAuthResponse> {
  const body: string = JSON.stringify({
    grant_type: "client_credentials",
    client_id: UAID,
    client_secret: SecretKey,
  });

  const response = await fetch(authURL, {
    method: "POST",
    headers: {
      ContentType: "application/json",
    },
    body,
  });

  const response_body = await response.json();

  if (response.ok && response_body.access_token) {
    const credentials: IAuthResponse = await response.json();
    return credentials;
  }

  if (response.ok && response_body.state) {
    return response_body;
  }

  if (!response.ok) {
    return {
      state: "error",
      msg: "Unknown Error",
    };
  }

  return {};
}

export default getTokens;

// private async request<T>(url: string, options?: RequestInit): Promise<T> {
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }

//     return await response.json() as T;
//   }

//   async getUser(userId: number): Promise<UserData> {
//     return await this.request<UserData>(`${this.baseURL}/users/${userId}`);
//   }

//   async createUser(userData: UserData): Promise<UserData> {
//     return await this.request<UserData>(`${this.baseURL}/users`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     });
//   }
// }
