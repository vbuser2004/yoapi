import { z } from "zod";

// Basic Downlink Data Packet
// Packet sent from client to API Server
export const baseBDDP_Schema = z.object({
  time: z.number(),
  method: z.string(),
  msgid: z.string().optional(),
  targetDevice: z.string().optional(),
  token: z.string().optional(),
});

// Basic Upload Data Packet
// Packet sent from server to client
export const baseBUDP_Schema = z.object({
  time: z.number(),
  method: z.string(),
  msgid: z.string().optional(),
  code: z.string(),
  desc: z.string().optional(),
});
