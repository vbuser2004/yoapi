import { z } from 'zod';
export declare const ApiError_Schema: z.ZodObject<{
    code: z.ZodString;
    time: z.ZodNumber;
    msgid: z.ZodString;
    method: z.ZodString;
    desc: z.ZodString;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    method: string;
    time: number;
    msgid: string;
    desc: string;
    data?: {} | undefined;
}, {
    code: string;
    method: string;
    time: number;
    msgid: string;
    desc: string;
    data?: {} | undefined;
}>;
export type ApiError = z.infer<typeof ApiError_Schema>;
