import { z } from 'zod';

export const LoraInfo = z.object({
    netId: z.string(),
    signal: z.number(),
    gatewayId: z.string(),
    gateways: z.number(),
});
