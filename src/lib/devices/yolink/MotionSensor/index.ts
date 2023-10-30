import Device from "../Device/index.js";
import * as MotionSensorTypes from "../../../../types/yolink/MotionSensor.js";
import { sendRequest } from "../../../request/client.js";

class MotionSensor extends Device {
  // FUNCTIONS
  getState = async (
    time: string
  ): Promise<MotionSensorTypes.bUDP_MotionSensor_getState> => {
    const safeResp = await sendRequest({
      targetDevice: this.deviceId,
      token: this.token,
      method: "MotionSensor.getState",
    });

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Motion Sensor response
    const msState =
      MotionSensorTypes.bUDP_MotionSensor_getState_Schema.safeParse(
        safeResp.data
      );

    if (!msState.success) throw new Error("Invalid Server Response");

    return msState.data;
  };
}

export default MotionSensor;
