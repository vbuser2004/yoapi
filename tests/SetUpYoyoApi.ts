import yoyoapi from "../dist/index.js";

const yo = new yoyoapi(process.env.UAID!, process.env.SECRET_KEY!);

export default yo;
