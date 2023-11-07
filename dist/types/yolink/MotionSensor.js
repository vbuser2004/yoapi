import { z } from 'zod';
import { baseBUDP_Schema } from '../BasicDataPacket.js';
// BUDP MotionSensor.getState
export const bUDP_MotionSensor_getState_Schema = baseBUDP_Schema.extend({
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
//# sourceMappingURL=MotionSensor.js.map