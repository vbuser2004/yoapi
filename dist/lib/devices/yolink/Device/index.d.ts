import { DeviceType } from '../../../../types/yolink/Device.js';
declare class Device {
    readonly deviceId: string;
    readonly deviceUDID: string;
    readonly name: string;
    readonly token: string;
    readonly type: string;
    readonly modelName: string;
    readonly parentDeviceId?: string;
    constructor(deviceDetails: DeviceType);
}
export default Device;
