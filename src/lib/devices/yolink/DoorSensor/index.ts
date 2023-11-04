import Device from "../Device/index.js";
import * as DoorSensorTypes from "../../../../types/yolink/DoorSensor.js";
import { sendRequest } from "../../../request/client.js";

class DoorSensor extends Device {
  // FUNCTIONS
  getState = async (
    msgid: string = new Date().getTime().toString()
  ): Promise<DoorSensorTypes.bUDP_DoorSensor_getState> => {
    const safeResp = await sendRequest({
      targetDevice: this.deviceId,
      token: this.token,
      method: "DoorSensor.getState",
      msgid,
    });

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Motion Sensor response
    const msState = DoorSensorTypes.bUDP_DoorSensor_getState_Schema.safeParse(
      safeResp.data
    );

    if (!msState.success) throw new Error("Invalid Server Response");

    return msState.data;
  };
}

export default DoorSensor;
