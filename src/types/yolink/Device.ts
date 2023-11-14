import { z } from "zod";

// Device
export const Device_Schema = z.object({
  deviceId: z.string(),
  deviceUDID: z.string().optional(),
  token: z.string(),
  name: z.string().optional(),
  type: z.string(),
  modelName: z.string().optional(),
  parentDeviceId: z.string().nullable().optional(),
});

export type DeviceType = z.infer<typeof Device_Schema>;
