import Device from '../Device/index.js';
import * as MotionSensorTypes from '../../../../types/yolink/MotionSensor.js';
import { sendRequest } from '../../../client.js';

class MotionSensor extends Device {
    // FUNCTIONS
    getState = async (
        time: string
    ): Promise<MotionSensorTypes.bUDP_MotionSensor_getState> => {
        const resp = await sendRequest({
            time,
            targetDevice: this.deviceId,
            token: this.token,
            method: 'MotionSensor.getState',
        });

        const motionSensorState =
            MotionSensorTypes.bUDP_MotionSensor_getState_Schema.safeParse(resp);

        if (!motionSensorState.success)
            throw new Error('Invalid Server Response');

        return motionSensorState.data;
    };
}

export default MotionSensor;
