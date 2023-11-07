import { z } from "zod";
import { baseBDDP_Schema } from "../BasicDataPacket.js";
export type bDDP_DoorSensor_getState = z.infer<typeof baseBDDP_Schema>;
export declare const bUDP_DoorSensor_getState_Schema: z.ZodObject<{
    code: z.ZodString;
    method: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    msgid: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        online: z.ZodBoolean;
        state: z.ZodObject<{
            alertInterval: z.ZodNumber;
            battery: z.ZodNumber;
            delay: z.ZodNumber;
            openRemindDelay: z.ZodNumber;
            state: z.ZodEnum<["open", "closed"]>;
            version: z.ZodString;
            stateChangedAt: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            state: "open" | "closed";
            alertInterval: number;
            battery: number;
            delay: number;
            openRemindDelay: number;
            version: string;
            stateChangedAt: number;
        }, {
            state: "open" | "closed";
            alertInterval: number;
            battery: number;
            delay: number;
            openRemindDelay: number;
            version: string;
            stateChangedAt: number;
        }>;
        reportAt: z.ZodDate;
        deviceId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        state: {
            state: "open" | "closed";
            alertInterval: number;
            battery: number;
            delay: number;
            openRemindDelay: number;
            version: string;
            stateChangedAt: number;
        };
        deviceId: string;
        online: boolean;
        reportAt: Date;
    }, {
        state: {
            state: "open" | "closed";
            alertInterval: number;
            battery: number;
            delay: number;
            openRemindDelay: number;
            version: string;
            stateChangedAt: number;
        };
        deviceId: string;
        online: boolean;
        reportAt: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    code: string;
    data: {
        state: {
            state: "open" | "closed";
            alertInterval: number;
            battery: number;
            delay: number;
            openRemindDelay: number;
            version: string;
            stateChangedAt: number;
        };
        deviceId: string;
        online: boolean;
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
            state: "open" | "closed";
            alertInterval: number;
            battery: number;
            delay: number;
            openRemindDelay: number;
            version: string;
            stateChangedAt: number;
        };
        deviceId: string;
        online: boolean;
        reportAt: Date;
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type bUDP_DoorSensor_getState = z.infer<typeof bUDP_DoorSensor_getState_Schema>;
