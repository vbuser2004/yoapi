import { ApiError } from "../../types/ApiError.js";
import { baseBDDP, baseBDDP_Schema } from "../../types/BasicDataPacket.js";
import { generateError } from "../utility/createerror.js";

// Generate body to transmit to API
export const generateBody = (packet: baseBDDP): baseBDDP | ApiError => {
  // Construct body and add time
  const body = {
    ...packet,
    time: new Date().getTime().toString(),
  };

  const isBDDPRequest = baseBDDP_Schema.partial().safeParse(body);

  if (!isBDDPRequest.success)
    return generateError("700102", "MsgIdUnknown", "error");

  return body;
};
