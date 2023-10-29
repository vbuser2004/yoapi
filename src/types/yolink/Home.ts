import { z } from 'zod';
import { baseBDDP_Schema, baseBUDP_Schema } from '../BasicDataPacket.js';
import { Device_Schema } from '../../types/yolink/Device.js';

export type bDDP_Home_DeviceList = z.infer<typeof baseBDDP_Schema>;

export const bUDP_Home_DeviceList_Schema = baseBUDP_Schema.extend({
    data: z.object({
        devices: Device_Schema.array(),
    }),
});

export type bUDP_Home_DeviceList = z.infer<typeof bUDP_Home_DeviceList_Schema>;
