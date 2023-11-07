import { z } from 'zod';
import { baseBDDP_Schema } from '../BasicDataPacket.js';
export type bDDP_Home_DeviceList = z.infer<typeof baseBDDP_Schema>;
export declare const bUDP_Home_DeviceList_Schema: z.ZodObject<{
    code: z.ZodString;
    method: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    msgid: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        devices: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        devices: {
            type: string;
            deviceId: string;
            deviceUDID: string;
            token: string;
            name: string;
            modelName: string;
            parentDeviceId?: string | null | undefined;
        }[];
    }, {
        devices: {
            type: string;
            deviceId: string;
            deviceUDID: string;
            token: string;
            name: string;
            modelName: string;
            parentDeviceId?: string | null | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    code: string;
    data: {
        devices: {
            type: string;
            deviceId: string;
            deviceUDID: string;
            token: string;
            name: string;
            modelName: string;
            parentDeviceId?: string | null | undefined;
        }[];
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}, {
    code: string;
    data: {
        devices: {
            type: string;
            deviceId: string;
            deviceUDID: string;
            token: string;
            name: string;
            modelName: string;
            parentDeviceId?: string | null | undefined;
        }[];
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type bUDP_Home_DeviceList = z.infer<typeof bUDP_Home_DeviceList_Schema>;
