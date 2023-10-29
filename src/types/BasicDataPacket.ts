import { z } from 'zod';

// Basic Downlink Data Packet
// Packet sent from client to API Server
export const baseBDDP_Schema = z.object({
    time: z.string(),
    method: z.string(),
    msgid: z.string().optional(),
    targetDevice: z.string().optional(),
    token: z.string().optional(),
});

export type baseBDDP = z.infer<typeof baseBDDP_Schema>;

// Basic Upload Data Packet
// Packet sent from server to client
export const baseBUDP_Schema = z.object({
    time: z.number(),
    method: z.string(),
    msgid: z.number().optional(),
    code: z.string(),
    desc: z.string().optional(),
});

export type baseBUDP = z.infer<typeof baseBUDP_Schema>;

export const baseBDDPRequest = baseBDDP_Schema.extend({
    params: z.string().optional(),
});

// Error Codes
// {
//   code: '000103',
//   time: 1697402684248,
//   msgid: '1234',
//   method: 'Outlet.getState',
//   desc: 'token not valid',
//   data: {}
// }
