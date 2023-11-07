import { Credentials, AuthenticationOptions } from './types/Authentication.js';
import { DeviceType } from './types/yolink/Device.js';
import Home from './lib/devices/yolink/Home/index.js';
import Outlet from './lib/devices/yolink/Outlet/index.js';
import MotionSensor from './lib/devices/yolink/MotionSensor/index.js';
import DoorSensor from './lib/devices/yolink/DoorSensor/index.js';
declare class yoyoApi {
    static Credentials: Credentials;
    static ApiURL: string;
    static AuthenticationURL: string;
    static AuthOptions: AuthenticationOptions;
    static AuthExpire: number;
    static OffSet: number;
    constructor(UAID: string, SecretKey: string, AuthenticationURL?: string, ApiURL?: string, OffSetPercentage?: number);
    ManualAuthentication(): Promise<boolean>;
    GetDevices(): Promise<any>;
    Home(): Home;
    Outlet(deviceDetails: DeviceType): Outlet;
    MotionSensor(deviceDetails: DeviceType): MotionSensor;
    DoorSensor(deviceDetails: DeviceType): DoorSensor;
}
export default yoyoApi;
