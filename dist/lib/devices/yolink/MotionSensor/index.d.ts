import Device from '../Device/index.js';
import * as MotionSensorTypes from '../../../../types/yolink/MotionSensor.js';
import { ApiError } from '../../../../types/ApiError.js';
declare class MotionSensor extends Device {
    getState: (msgid?: string) => Promise<MotionSensorTypes.bUDP_MotionSensor_getState | ApiError>;
}
export default MotionSensor;
