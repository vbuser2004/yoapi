class Device {
    readonly deviceId: string;
    readonly deviceUDID: string;
    readonly name: string;
    readonly token: string;
    readonly type: string;
    readonly modelName: string;
    readonly parentDeviceId?: string;

    constructor(
        deviceId: string,
        deviceUDID: string,
        name: string,
        token: string,
        type: string,
        modelName: string,
        parentDeviceId?: string
    ) {
        this.deviceId = deviceId;
        this.deviceUDID = deviceUDID;
        this.name = name;
        this.token = token;
        this.type = type;
        this.modelName = modelName;

        if (parentDeviceId !== undefined) {
            this.parentDeviceId = parentDeviceId;
        }
    }
}

export default Device;
