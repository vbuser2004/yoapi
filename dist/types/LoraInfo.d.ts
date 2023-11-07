import { z } from "zod";
export declare const LoraInfo: z.ZodObject<{
    netId: z.ZodString;
    signal: z.ZodNumber;
    gatewayId: z.ZodString;
    gateways: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    netId: string;
    signal: number;
    gatewayId: string;
    gateways: number;
}, {
    netId: string;
    signal: number;
    gatewayId: string;
    gateways: number;
}>;
