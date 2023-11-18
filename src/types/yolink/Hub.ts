import { z } from 'zod';
import { baseBDDP_Schema, baseBUDP_Schema } from '../BasicDataPacket.js';

// Get State
export const bDDP_Hub_getState_Schema = baseBDDP_Schema;

export type bDDP_Hub_getState = z.infer<typeof baseBDDP_Schema>;

export const bUDP_Hub_getState_Schema = baseBUDP_Schema.extend({
    data: z.object({
        online: z.boolean(),
        version: z.string(),
        wifi: z.object({
            ssid: z.string(),
            enable: z.boolean(),
            ip: z.string().ip().optional(),
            gateway: z.string().ip().optional(),
            mask: z.string().ip().optional(),
        }),
        eth: z.object({
            enable: z.boolean(),
            ip: z.string().ip().optional(),
            gateway: z.string().ip().optional(),
            mask: z.string().ip().optional(),
        }),
    }),
});

export type bUDP_Hub_getState = z.infer<typeof bUDP_Hub_getState_Schema>;
