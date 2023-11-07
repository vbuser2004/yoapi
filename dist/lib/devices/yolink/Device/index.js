class Device {
    deviceId;
    deviceUDID;
    name;
    token;
    type;
    modelName;
    parentDeviceId;
    constructor(deviceDetails) {
        this.deviceId = deviceDetails.deviceId;
        this.deviceUDID = deviceDetails.deviceUDID;
        this.name = deviceDetails.name;
        this.token = deviceDetails.token;
        this.type = deviceDetails.type;
        this.modelName = deviceDetails.modelName;
        if (deviceDetails.parentDeviceId !== undefined) {
            this.parentDeviceId = deviceDetails.parentDeviceId;
        }
    }
}
export default Device;
//# sourceMappingURL=index.js.map