import { z } from "zod";
import { baseBDDP_Schema, baseBUDP_Schema } from "./BasicDataPacket.js";

// BDDP Outlet.getState
export type bDDP_Outlet_getState = z.infer<typeof baseBDDP_Schema>;

// BUDP Outlet.getState
const bUDP_Outlet_getState = baseBUDP_Schema.extend({
  data: z.object({
    state: z.enum(["open", "closed"]),
    delay: z.object({
      ch: z.number(),
      on: z.number(),
      off: z.number(),
    }),
    power: z.number().optional(),
    watt: z.number().optional(),
    version: z.string(),
    time: z.string(),
    tz: z.number(),
    loraInfo: z.object({
      netId: z.string(),
      signal: z.number(),
      gatewayId: z.string(),
      gateways: z.number(),
    }),
  }),
});

// BDDP Outlet.setState
const bDDP_Outlet_setState = baseBDDP_Schema.extend({
  params: z.object({
    state: z.enum(["open", "closed"]),
  }),
});
export type bDDP_Outlet_setState = z.infer<typeof bDDP_Outlet_setState>;

// BUDP Outlet.setState
const bUDP_Outlet_setState = baseBUDP_Schema.extend({
  data: z.object({
    state: z.enum(["open", "closed"]),
  }),
});
export type bUDP_Outlet_setState = z.infer<typeof bUDP_Outlet_setState>;
