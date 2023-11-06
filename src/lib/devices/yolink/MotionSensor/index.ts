import Device from '../Device/index.js';
import * as MotionSensorTypes from '../../../../types/yolink/MotionSensor.js';
import { sendRequest } from '../../../request/client.js';
import { ApiError } from '../../../../types/ApiError.js';
import { generateError } from '../../../utility/createerror.js';

class MotionSensor extends Device {
    // FUNCTIONS
    getState = async (
        msgid: string = new Date().getTime().toString()
    ): Promise<MotionSensorTypes.bUDP_MotionSensor_getState | ApiError> => {
        const safeResp = await sendRequest({
            targetDevice: this.deviceId,
            token: this.token,
            method: 'MotionSensor.getState',
            msgid,
        });

        // If error send error data
        if (!safeResp.success) return safeResp.data;

        // Not an error so Verify it is valid Motion Sensor response
        const msState =
            MotionSensorTypes.bUDP_MotionSensor_getState_Schema.safeParse(
                safeResp.data
            );

        if (!msState.success)
            return await generateError(
                '700101',
                msgid,
                'MotionSensor.getState'
            );
        if (!msState.success) throw new Error('Invalid Server Response');

        return msState.data;
    };
}

export default MotionSensor;
