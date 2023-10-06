/* Init */



  
  class APIWrapper {
    private baseURL: string;
  
    constructor(baseURL: string) {
      this.baseURL = baseURL;
    }
  

  
  // Example usage:
  const api = new APIWrapper('https://api.example.com');
  
  async function exampleUsage() {
    try {
      const user = await api.getUser(123);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }
  
  exampleUsage();
  