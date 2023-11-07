import { z } from "zod";
export declare const baseBDDP_Schema: z.ZodObject<{
    time: z.ZodOptional<z.ZodString>;
    method: z.ZodString;
    msgid: z.ZodOptional<z.ZodString>;
    targetDevice: z.ZodOptional<z.ZodString>;
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    method: string;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
    token?: string | undefined;
}, {
    method: string;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
    token?: string | undefined;
}>;
export type baseBDDP = z.infer<typeof baseBDDP_Schema>;
export declare const baseBUDP_Schema: z.ZodObject<{
    time: z.ZodOptional<z.ZodNumber>;
    method: z.ZodString;
    msgid: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
    desc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string;
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}, {
    code: string;
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type baseBUDP = z.infer<typeof baseBUDP_Schema>;
