import { z } from 'zod';
import { baseBDDP_Schema, baseBUDP_Schema } from '../BasicDataPacket.js';

// BDDP MotionSensor.getState
export type bDDP_MotionSensor_getState = z.infer<typeof baseBDDP_Schema>;

// BUDP MotionSensor.getState
const bUDP_MotionSensor_getState_Schema = baseBUDP_Schema.extend({
    data: z.object({
        state: z.object({
            online: z.boolean(),
            state: z.string(),
            battery: z.string(),
            alertInterval: z.number(),
            ledAlarm: z.boolean().optional(),
            nomotionDelay: z.number().optional(),
            version: z.string(),
        }),
        reportAt: z.date(),
        deviceId: z.string(),
    }),
});

export type bUDP_MotionSensor_getState = z.infer<
    typeof bUDP_MotionSensor_getState_Schema
>;
