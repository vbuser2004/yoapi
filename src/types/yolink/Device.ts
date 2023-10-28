import { z } from 'zod';

// Device
export const Device_Schema = z.object({
    deviceId: z.string(),
    deviceUDID: z.string(),
    token: z.string(),
    name: z.string(),
    type: z.string(),
    modelName: z.string(),
    parentDeviceId: z.string().optional(),
});

export type DeviceType = z.infer<typeof Device_Schema>;

export type DeviceTypeList = DeviceType[];
