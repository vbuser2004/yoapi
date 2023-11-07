import { z } from 'zod';
// Device
export const Device_Schema = z.object({
    deviceId: z.string(),
    deviceUDID: z.string(),
    token: z.string(),
    name: z.string(),
    type: z.string(),
    modelName: z.string(),
    parentDeviceId: z.string().nullable().optional(),
});
//# sourceMappingURL=Device.js.map