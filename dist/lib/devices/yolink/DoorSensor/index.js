import Device from '../Device/index.js';
import * as DoorSensorTypes from '../../../../types/yolink/DoorSensor.js';
import { sendRequest } from '../../../request/client.js';
import { generateError } from '../../../utility/createerror.js';
class DoorSensor extends Device {
    // FUNCTIONS
    getState = async (msgid = new Date().getTime().toString()) => {
        const safeResp = await sendRequest({
            targetDevice: this.deviceId,
            token: this.token,
            method: 'DoorSensor.getState',
            msgid,
        });
        // If error send error data
        if (!safeResp.success)
            return safeResp.data;
        // Not an error so Verify it is valid Motion Sensor response
        const msState = DoorSensorTypes.bUDP_DoorSensor_getState_Schema.safeParse(safeResp.data);
        if (!msState.success)
            return await generateError('700101', msgid, 'DoorSensor.getState');
        return msState.data;
    };
}
export default DoorSensor;
//# sourceMappingURL=index.js.map