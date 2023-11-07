import { AuthenticationOptions_Schema, ApiUrl_Schema, } from './types/Authentication.js';
import { Authenticated } from './auth/index.js';
import Home from './lib/devices/yolink/Home/index.js';
import Outlet from './lib/devices/yolink/Outlet/index.js';
import MotionSensor from './lib/devices/yolink/MotionSensor/index.js';
import DoorSensor from './lib/devices/yolink/DoorSensor/index.js';
class yoyoApi {
    // VARIABLES
    static Credentials;
    static ApiURL;
    static AuthenticationURL;
    static AuthOptions;
    static AuthExpire = -1; //Expiration time of the current credentials - defaults to -1
    static OffSet;
    // CONSTRUCTOR
    constructor(UAID, SecretKey, AuthenticationURL = 'https://api.yosmart.com/open/yolink/token', ApiURL = 'https://api.yosmart.com/open/yolink/v2/api', OffSetPercentage = 20) {
        // Validate Authentication Details
        const isAuthOptions = AuthenticationOptions_Schema.safeParse({
            UAID,
            secretKey: SecretKey,
            authURL: AuthenticationURL,
        });
        // Assign Authentication Options
        if (isAuthOptions.success) {
            yoyoApi.AuthOptions = isAuthOptions.data;
            yoyoApi.AuthenticationURL = isAuthOptions.data.authURL;
        }
        else {
            throw new Error('Invalid Authentication Details');
        }
        const isApiUrl = ApiUrl_Schema.safeParse(ApiURL);
        if (isApiUrl.success) {
            yoyoApi.ApiURL = isApiUrl.data;
        }
        else {
            throw new Error('Invalid API Url');
        }
        yoyoApi.OffSet = OffSetPercentage;
    }
    // FUNCTIONS
    // Initiate authentication process manually
    async ManualAuthentication() {
        const isAuthenticated = await Authenticated();
        return isAuthenticated;
    }
    // Returns list of devices and classes
    async GetDevices() {
        const home = new Home();
        return await home.getDevs();
    }
    // HOME
    Home() {
        const home = new Home();
        return home;
    }
    // DEVICES
    Outlet(deviceDetails) {
        const outlet = new Outlet(deviceDetails);
        return outlet;
    }
    MotionSensor(deviceDetails) {
        const motionsensor = new MotionSensor(deviceDetails);
        return motionsensor;
    }
    DoorSensor(deviceDetails) {
        const doorsensor = new DoorSensor(deviceDetails);
        return doorsensor;
    }
}
export default yoyoApi;
//# sourceMappingURL=index.js.map