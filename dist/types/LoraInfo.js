import { z } from "zod";
// LORA (long range wifi) data
export const LoraInfo = z.object({
    netId: z.string(),
    signal: z.number(),
    gatewayId: z.string(),
    gateways: z.number(),
});
//# sourceMappingURL=LoraInfo.js.map