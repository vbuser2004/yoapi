import { z } from 'zod';
import { baseBUDP_Schema } from '../BasicDataPacket.js';
import { Device_Schema } from '../../types/yolink/Device.js';
export const bUDP_Home_DeviceList_Schema = baseBUDP_Schema.extend({
    data: z.object({
        devices: Device_Schema.array(),
    }),
});
//# sourceMappingURL=Home.js.map