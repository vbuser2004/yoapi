import Device from "../Device/index.js";
import * as GarageDoorTypes from "../../../../types/yolink/GarageDoor.js";
import { sendRequest } from "../../../request/client.js";
import { ApiError } from "../../../../types/ApiError.js";
import { generateError } from "../../../utility/createerror.js";

class GarageDoor extends Device {
  // FUNCTIONS
  getState = async (
    msgid: string = new Date().getTime().toString()
  ): Promise<GarageDoorTypes.bUDP_GarageDoor_getState | ApiError> => {
    const safeResp = await sendRequest({
      targetDevice: this.deviceId,
      token: this.token,
      method: "GarageDoor.getState",
      msgid,
    });

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Motion Sensor response
    const msState = GarageDoorTypes.bUDP_GarageDoor_getState_Schema.safeParse(
      safeResp.data
    );

    if (!msState.success)
      return generateError("700101", msgid, "GarageDoor.getState");

    return msState.data;
  };

  toggle = async (
    msgid: string = new Date().getTime().toString()

  ): Promise<GarageDoorTypes.bUDP_GarageDoor_toggle | ApiError> => {

    const safeResp = await sendRequest({
      targetDevice: this.deviceId,
      token: this.token,
      method: "GarageDoor.toggle",
      msgid,
    });
      
    // If error send error data
    if (!safeResp.success) return safeResp.data;

    const msState = GarageDoorTypes.bUDP_GarageDoor_toggle_Schema.safeParse(
        safeResp.data
    )

    if (!msState.success){
        return generateError("700101", msgid, "GarageDoor.toggle");
    }

    return msState.data; 
  }

}

export default GarageDoor;
