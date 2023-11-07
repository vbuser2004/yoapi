import Device from '../Device/index.js';
import * as DoorSensorTypes from '../../../../types/yolink/DoorSensor.js';
import { ApiError } from '../../../../types/ApiError.js';
declare class DoorSensor extends Device {
    getState: (msgid?: string) => Promise<DoorSensorTypes.bUDP_DoorSensor_getState | ApiError>;
}
export default DoorSensor;
