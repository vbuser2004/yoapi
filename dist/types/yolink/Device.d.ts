import { z } from 'zod';
export declare const Device_Schema: z.ZodObject<{
    deviceId: z.ZodString;
    deviceUDID: z.ZodString;
    token: z.ZodString;
    name: z.ZodString;
    type: z.ZodString;
    modelName: z.ZodString;
    parentDeviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: string;
    deviceId: string;
    deviceUDID: string;
    token: string;
    name: string;
    modelName: string;
    parentDeviceId?: string | null | undefined;
}, {
    type: string;
    deviceId: string;
    deviceUDID: string;
    token: string;
    name: string;
    modelName: string;
    parentDeviceId?: string | null | undefined;
}>;
export type DeviceType = z.infer<typeof Device_Schema>;
