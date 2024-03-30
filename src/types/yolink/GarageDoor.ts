import { z } from "zod";
import { baseBDDP_Schema, baseBUDP_Schema } from "../BasicDataPacket.js";
import { LoraInfo } from "../LoraInfo.js";

// BDDP DoorSensor.getState
export type bDDP_GarageDoor_getState = z.infer<typeof baseBDDP_Schema>;

// BUDP GarageDoor.getState
export const bUDP_GarageDoor_getState_Schema = baseBUDP_Schema.extend({
  data: z.object({
    version: z.string(),
    time: z.string(),
    loraInfo: LoraInfo
  }),
});


export type bUDP_GarageDoor_getState = z.infer<
  typeof bUDP_GarageDoor_getState_Schema
>;


// BDDP GarageDoor.toggle
export type bDDP_GarageDoor_toggle = z.infer<typeof baseBDDP_Schema>;

// BUDP GarageDoor.toggle   
export const bUDP_GarageDoor_toggle_Schema = baseBUDP_Schema.extend({
  data: z.object({
      stateChangedAt: z.number(),
      loraInfo: LoraInfo,
    })
});

export type bUDP_GarageDoor_toggle = z.infer<
  typeof bUDP_GarageDoor_toggle_Schema
>;


// {
//   "code": "000000",
//   "time": 1711803296688,
//   "msgid": 1711803296688,
//   "method": "GarageDoor.toggle",
//   "desc": "Success",
//   "data": {
//     "stateChangedAt": 1711803296687,
//     "loraInfo": {
//       "netId": "010201",
//       "signal": -61,
//       "gatewayId": "d88b4c1603031acf",
//       "gateways": 1
//     }
//   }
// }