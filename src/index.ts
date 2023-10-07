import 'dotenv/config'
import { auth } from './auth/token.js';

const authoptions = {
    UAID: process.env.YOLINK_UAID,
    secretKey: process.env.YOLINK_SK
}


const getAuth = async () => {

    console.log(JSON.stringify(authoptions));

   await auth(authoptions);

}

getAuth();

