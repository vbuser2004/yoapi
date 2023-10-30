import { z } from "zod";

// Format of error when API does not work as intended
export const ApiError_Schema = z.object({
  code: z.string(),
  time: z.number(),
  msgid: z.string(),
  method: z.string(),
  desc: z.string(),
  data: z.object({}),
});

export type ApiError = z.infer<typeof ApiError_Schema>;
