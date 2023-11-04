import { z } from "zod";
import { baseBDDP_Schema, baseBUDP_Schema } from "../BasicDataPacket.js";

// BDDP DoorSensor.getState
export type bDDP_DoorSensor_getState = z.infer<typeof baseBDDP_Schema>;

// BUDP DoorSensor.getState
export const bUDP_DoorSensor_getState_Schema = baseBUDP_Schema.extend({
  data: z.object({
    online: z.boolean(),
    state: z.object({
      alertInterval: z.number(),
      battery: z.number(),
      delay: z.number(),
      openRemindDelay: z.number(),
      state: z.enum(["open", "closed"]),
      version: z.string(),
      stateChangedAt: z.number(),
    }),
    reportAt: z.date(),
    deviceId: z.string(),
  }),
});

export type bUDP_DoorSensor_getState = z.infer<
  typeof bUDP_DoorSensor_getState_Schema
>;
