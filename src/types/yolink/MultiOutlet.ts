import { z } from "zod";
import { baseBDDP_Schema, baseBUDP_Schema } from "../BasicDataPacket.js";
import { LoraInfo } from "../LoraInfo.js";

// BDDP MultiOutlet.getState
export const bDDP_MultiOutlet_getState_Schema = baseBDDP_Schema;

export type bDDP_MultiOutlet_getState = z.infer<typeof baseBDDP_Schema>;

// BUDP MultiOutlet.getState
export const bUDP_MultiOutlet_getState_Schema = baseBUDP_Schema.extend({
  data: z.object({
    state: z.enum(["open", "closed"]),
    delays: z.array(z.object({
      ch: z.number(),
      on: z.number(),
      off: z.number(),
    })),
    version: z.string(),
    tz: z.number(),
    loraInfo: LoraInfo,
  }),
});

export type bUDP_MultiOutlet_getState = z.infer<typeof bUDP_MultiOutlet_getState_Schema>;

// BDDP MultiOutlet.setState
export const bDDP_MultiOutlet_setState_Schema = baseBDDP_Schema.extend({
  params: z.object({
    state: z.enum(["open", "close"]),
  }),
});
export type bDDP_MultiOutlet_setState = z.infer<typeof bDDP_MultiOutlet_setState_Schema>;

// BUDP MultiOutlet.setState
export const bUDP_MultiOutlet_setState_Schema = baseBUDP_Schema.extend({
  data: z.object({
    state: z.enum(["open", "closed"]),
  }),
});
export type bUDP_MultiOutlet_setState = z.infer<typeof bUDP_MultiOutlet_setState_Schema>;

// BDDP MultiOutlet.setDelay
export const bDDP_MultiOutlet_setDelay_Schema = baseBDDP_Schema.extend({
  params: z.object({
    delayOn: z.number().optional(),
    delayOff: z.number().optional(),
  }),
});

export type bDDP_MultiOutlet_setDelay = z.infer<typeof bDDP_MultiOutlet_setDelay_Schema>;

// BUDP MultiOutlet.setDelay
export const bUDP_MultiOutlet_setDelay_Schema = baseBUDP_Schema.extend({
  data: z.object({
    delay: z.object({
      on: z.number(),
      off: z.number(),
    }),
  }),
});

export type bUDP_MultiOutlet_setDelay = z.infer<typeof bUDP_MultiOutlet_setDelay_Schema>;

// BDDP MultiOutlet.getSchedules
export const bDDP_MultiOutlet_getSchedules_Schema = baseBDDP_Schema;

export type bDDP_MultiOutlet_getSchedules = z.infer<typeof baseBDDP_Schema>;

// BUDP MultiOutlet.getSchedules
export const bUDP_MultiOutlet_getSchedules_Schema = baseBUDP_Schema.extend({
  data: z
    .record(
      z.string(),
      z.object({
        isValid: z.boolean(),
        index: z.number(),
        on: z.string().optional(),
        off: z.string().optional(),
        week: z.number(),
      })
    )
    .array(),
});

export type bUDP_MultiOutlet_getSchedules = z.infer<
  typeof bUDP_MultiOutlet_getSchedules_Schema
>;

// BDDP MultiOutlet.setSchedules
export const bDDP_MultiOutlet_setSchedules_Schema = baseBDDP_Schema.extend({
  params: z.object({
    sches: z
      .record(
        z.string(),
        z.object({
          isValid: z.boolean(),
          index: z.number(),
          on: z.string().optional(),
          off: z.string().optional(),
          week: z.number(),
        })
      )
      .array(),
  }),
});

export type bDDP_MultiOutlet_setSchedules = z.infer<
  typeof bDDP_MultiOutlet_setSchedules_Schema
>;

// Set Schedule Parameter Schema
export const sches_Schema = z
  .object({
    isValid: z.boolean(),
    index: z.number(),
    on: z.string().optional(),
    off: z.string().optional(),
    week: z.number().optional().default(-1),
    weekdays: z
      .enum([
        "All",
        "Weekdays",
        "Weekends",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ])
      .array()
      .optional(),
  })
  .array();

export type sches = z.infer<typeof sches_Schema>;

// BUDP MultiOutlet.setSchedules
// Note: Same at getSchedules
export type bUDP_MultiOutlet_setSchedules = z.infer<
  typeof bUDP_MultiOutlet_getSchedules_Schema
>;