import { z } from 'zod';
import { baseBDDP_Schema, baseBUDP_Schema } from '../BasicDataPacket.js';
import { Device_Schema } from '../../types/yolink/Device.js';

// DeviceList
export const bDDP_Home_DeviceList_Schema = baseBDDP_Schema;

export type bDDP_Home_DeviceList = z.infer<typeof baseBDDP_Schema>;

export const bUDP_Home_DeviceList_Schema = baseBUDP_Schema.extend({
    data: z.object({
        devices: Device_Schema.array(),
    }),
});

export type bUDP_Home_DeviceList = z.infer<typeof bUDP_Home_DeviceList_Schema>;

// General Info
export const bDDP_Home_GeneralInfo_Schema = baseBDDP_Schema;

export type bDDP_Home_GeneralInfo = z.infer<typeof baseBDDP_Schema>;

export const bUDP_Home_GeneralInfo_Schema = baseBUDP_Schema.extend({
    data: z.object({
        id: z.string(),
    }),
});

export type bUDP_Home_GeneralInfo = z.infer<
    typeof bUDP_Home_GeneralInfo_Schema
>;
