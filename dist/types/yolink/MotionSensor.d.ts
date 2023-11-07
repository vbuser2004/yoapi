import { z } from 'zod';
import { baseBDDP_Schema } from '../BasicDataPacket.js';
export type bDDP_MotionSensor_getState = z.infer<typeof baseBDDP_Schema>;
export declare const bUDP_MotionSensor_getState_Schema: z.ZodObject<{
    code: z.ZodString;
    method: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    msgid: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        state: z.ZodObject<{
            online: z.ZodBoolean;
            state: z.ZodString;
            battery: z.ZodString;
            alertInterval: z.ZodNumber;
            ledAlarm: z.ZodOptional<z.ZodBoolean>;
            nomotionDelay: z.ZodOptional<z.ZodNumber>;
            version: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            state: string;
            online: boolean;
            alertInterval: number;
            battery: string;
            version: string;
            ledAlarm?: boolean | undefined;
            nomotionDelay?: number | undefined;
        }, {
            state: string;
            online: boolean;
            alertInterval: number;
            battery: string;
            version: string;
            ledAlarm?: boolean | undefined;
            nomotionDelay?: number | undefined;
        }>;
        reportAt: z.ZodDate;
        deviceId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        state: {
            state: string;
            online: boolean;
            alertInterval: number;
            battery: string;
            version: string;
            ledAlarm?: boolean | undefined;
            nomotionDelay?: number | undefined;
        };
        deviceId: string;
        reportAt: Date;
    }, {
        state: {
            state: string;
            online: boolean;
            alertInterval: number;
            battery: string;
            version: string;
            ledAlarm?: boolean | undefined;
            nomotionDelay?: number | undefined;
        };
        deviceId: string;
        reportAt: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    code: string;
    data: {
        state: {
            state: string;
            online: boolean;
            alertInterval: number;
            battery: string;
            version: string;
            ledAlarm?: boolean | undefined;
            nomotionDelay?: number | undefined;
        };
        deviceId: string;
        reportAt: Date;
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}, {
    code: string;
    data: {
        state: {
            state: string;
            online: boolean;
            alertInterval: number;
            battery: string;
            version: string;
            ledAlarm?: boolean | undefined;
            nomotionDelay?: number | undefined;
        };
        deviceId: string;
        reportAt: Date;
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type bUDP_MotionSensor_getState = z.infer<typeof bUDP_MotionSensor_getState_Schema>;
