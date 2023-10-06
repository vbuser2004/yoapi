

export async function request<T>(url?: string) {

    const authUrl = process.env.YOLINK_AUTH_URL || url;

    




}


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