import Device from '../Device/index.js';
import { sendRequest } from '../../../request/client.js';
import * as OutletTypes from '../../../../types/yolink/Outlet.js';
import { ApiError } from '../../../../types/ApiError.js';

class Outlet extends Device {
    // FUNCTIONS
    sendOutletRequest = async (
        method: string,
        params: object = {},
        msgid: string = new Date().getTime().toString()
    ) => {
        const msgBody = {
            targetDevice: this.deviceId,
            token: this.token,
            method: `Outlet.${method}`,
            msgid,
            params,
        };

        // Ignore 'any' error as schema will be present
        const isValidBody =
            // @ts-ignore
            OutletTypes[`bDDP_Outlet_${method}_Schema`].safeParse(msgBody);

        // Check to make sure body is type safe
        if (!isValidBody.success) throw new Error('Invalid Request Body');

        // Send request
        const safeResp = await sendRequest(msgBody);

        // If error send error data
        if (!safeResp.success) return safeResp.data;

        //@ts-ignore ignore 'any' error as schema will be present
        const outletState = OutletTypes[
            `bUDP_Outlet_${method}_Schema`
        ].safeParse(safeResp.data);

        if (!outletState.success) throw new Error('Invalid Server Response');

        return outletState.data;
    };

    getState = async (
        msgid?: string
    ): Promise<OutletTypes.bUDP_Outlet_getState | ApiError> => {
        return await this.sendOutletRequest('getState', {}, msgid);
    };

    setState = async (
        state: string,
        msgid?: string
    ): Promise<OutletTypes.bUDP_Outlet_setState | ApiError> => {
        return await this.sendOutletRequest('setState', { state }, msgid);
    };

    setDelay = async (
        delayOn: number = 0,
        delayOff: number = 0,
        msgid?: string
    ): Promise<OutletTypes.bUDP_Outlet_setDelay | ApiError> => {
        return await this.sendOutletRequest(
            'setDelay',
            { delayOn, delayOff },
            msgid
        );
    };

    getSchedules = async (
        msgid?: string
    ): Promise<OutletTypes.bUDP_Outlet_getSchedules | ApiError> => {
        return await this.sendOutletRequest('getSchedules', {}, msgid);
    };

    //     Param	Value	Desc
    // method	Outlet.setSchedules	Set Schedule.
    // targetDevice	<String,Necessary>	DeviceId of the Outlet you use;
    // token	<String,Necessary>	Net token of the Outlet you use;
    // params.sches	<Array<Schedule>	Map<int,Schedule>,Necessary>
    // params.sches[index].isValid	<Boolean,Necessary>	Enabled/Disabled ;
    // params.sches[index].index	<Integer,Necessary>	Index of this record ;
    // params.sches[index].on	<String,Necessary>	Time to turn on; HH:mm
    // params.sches[index].off	<String,Necessary>	Time to turn off; HH:mm
    // params.sches[index].week	<Integer,Necessary>	mask of effected days(Sunday to Saturday)

    setSchedules = async (
        scheduleList: OutletTypes.sches,
        msgid?: string
    ): Promise<OutletTypes.bUDP_Outlet_setSchedules> => {
        return await this.sendOutletRequest(
            'setScheduled',
            { params: { sches: scheduleList } },
            msgid
        );
    };

    // export const getVersion = async (
    //     getVersionOptions: Outlet.bDDP_Outlet_getVersion
    // ): Promise<Outlet.bUDP_Outlet_getVersion> => {};

    // export const startUpgrade = async (
    //     startUpgradeOptions: Outlet.bDDP_Outlet_startUpgrade
    // ): Promise<Outlet.bUDP_Outlet_startUpgrade> => {};
}

export default Outlet;
