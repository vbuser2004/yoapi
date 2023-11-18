import Device from '../Device/index.js';
import * as HubTypes from '../../../../types/yolink/Hub.js';
import { sendRequest } from '../../../request/client.js';
import { ApiError } from '../../../../types/ApiError.js';
import { generateError } from '../../../utility/createerror.js';

class Hub extends Device {
    getState = async (
        msgid: string = new Date().getTime().toString()
    ): Promise<HubTypes.bUDP_Hub_getState | ApiError> => {
        const safeResp = await sendRequest({
            targetDevice: this.deviceId,
            token: this.token,
            method: 'Hub.getState',
            msgid,
        });
        // If error send error data
        if (!safeResp.success) return safeResp.data;
        // Not an error so Verify it is valid Motion Sensor response
        const msState = HubTypes.bUDP_Hub_getState_Schema.safeParse(
            safeResp.data
        );
        if (!msState.success)
            return generateError('700101', msgid, 'Hub.getState');
        return msState.data;
    };
}

export default Hub;
