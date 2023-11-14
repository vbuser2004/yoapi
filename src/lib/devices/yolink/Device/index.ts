import { DeviceType } from "../../../../types/yolink/Device.js";

class Device {
  readonly deviceId: string;
  readonly deviceUDID?: string;
  readonly name?: string;
  readonly token: string;
  readonly type?: string;
  readonly modelName?: string;
  readonly parentDeviceId?: string;

  constructor(deviceDetails: DeviceType) {
    this.deviceId = deviceDetails.deviceId;
    this.deviceUDID = deviceDetails.deviceUDID;
    this.name = deviceDetails.name;
    this.token = deviceDetails.token;
    this.type = deviceDetails.type;
    this.modelName = deviceDetails.modelName;

    if (deviceDetails.parentDeviceId !== undefined) {
      this.parentDeviceId = deviceDetails.parentDeviceId!;
    }
  }
}

export default Device;
