import {
    Credentials,
    AuthenticationOptions_Schema,
    AuthenticationOptions,
    ApiUrl_Schema,
} from './types/Authentication.js';

import { Authenticated } from './auth/index.js';
import { DeviceType } from './types/yolink/Device.js';
import Home from './lib/devices/yolink/Home/index.js';
import Outlet from './lib/devices/yolink/Outlet/index.js';
import MotionSensor from './lib/devices/yolink/MotionSensor/index.js';
import DoorSensor from './lib/devices/yolink/DoorSensor/index.js';
import Hub from './lib/devices/yolink/Hub/index.js';
import GarageDoor from './lib/devices/yolink/GarageDoor/index.js';

class yoyoApi {
    // VARIABLES
    static Credentials: Credentials;
    static ApiURL: string;
    static AuthenticationURL: string;
    static AuthOptions: AuthenticationOptions;
    static AuthExpire: number = -1; //Expiration time of the current credentials - defaults to -1
    static OffSet: number;

    // CONSTRUCTOR
    constructor(
        UAID: string,
        SecretKey: string,
        AuthenticationURL: string = 'https://api.yosmart.com/open/yolink/token',
        ApiURL: string = 'https://api.yosmart.com/open/yolink/v2/api',
        OffSetPercentage: number = 20
    ) {
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
        } else {
            throw new Error('Invalid Authentication Details');
        }

        const isApiUrl = ApiUrl_Schema.safeParse(ApiURL);

        if (isApiUrl.success) {
            yoyoApi.ApiURL = isApiUrl.data;
        } else {
            throw new Error('Invalid API Url');
        }

        yoyoApi.OffSet = OffSetPercentage;
    }

    // FUNCTIONS
    // Initiate authentication process manually
    async ManualAuthentication(): Promise<boolean> {
        const isAuthenticated: boolean = await Authenticated();
        return isAuthenticated;
    }
    // Returns list of devices and classes
    async GetDevices() {
        const home = new Home();
        return await home.getDevs();
    }

    // HOME
    Home(): Home {
        const home = new Home();
        return home;
    }

    // DEVICES
    Outlet(deviceDetails: DeviceType): Outlet {
        const outlet = new Outlet(deviceDetails);
        return outlet;
    }

    MotionSensor(deviceDetails: DeviceType): MotionSensor {
        const motionsensor = new MotionSensor(deviceDetails);
        return motionsensor;
    }

    DoorSensor(deviceDetails: DeviceType): DoorSensor {
        const doorsensor = new DoorSensor(deviceDetails);
        return doorsensor;
    }

    // GarageSensor and DoorSensor use same functions
    GarageSensor(deviceDetails: DeviceType): DoorSensor { 
        const garagesensor = new DoorSensor(deviceDetails);
        return garagesensor;
    }

    GarageDoor(deviceDetails: DeviceType): GarageDoor {
        const garagedoor = new GarageDoor(deviceDetails);
        return garagedoor;
    }
    
    Hub(deviceDetails: DeviceType): Hub {
        const hub = new Hub(deviceDetails);
        return hub;
    }
}

export default yoyoApi;
