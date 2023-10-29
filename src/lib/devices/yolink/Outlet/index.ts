import Device from '../Device/index.js';
import { sendRequest } from '../../../client.js';
import * as OutletTypes from '../../../../types/yolink/Outlet.js';

class Outlet extends Device {
    // FUNCTIONS
    getState = async (): Promise<OutletTypes.bUDP_Outlet_getState> => {
        const resp = await sendRequest({
            time: new Date().getTime().toString(),
            targetDevice: this.deviceId,
            token: this.token,
            method: 'Outlet.getState',
        });

        const outletState =
            OutletTypes.bUDP_Outlet_getState_Schema.safeParse(resp);

        console.log('error: ' + JSON.stringify(outletState));

        if (!outletState.success) throw new Error('Invalid Server Response');

        return outletState.data;
    };

    // export const setState = async (
    //     setStateOptions: Outlet.bDDP_Outlet_setState
    // ): Promise<Outlet.bDDP_Outlet_setState> => {};

    // export const setDelay = async (
    //     setDelayOptions: Outlet.bDDP_Outlet_setDelay
    // ): Promise<Outlet.bDDP_Outlet_setDelay> => {};

    // export const getSchedules = async (
    //     getSchedulesOptions: Outlet.bDDP_Outlet_getSchedules
    // ): Promise<Outlet.bUDP_Outlet_getSchedules> => {};

    // export const setSchedules = async (
    //     setSchedulesOptions: Outlet.bDDP_Outlet_setSchedules
    // ): Promise<Outlet.bUDP_Outlet_setSchedules> => {};

    // export const getVersion = async (
    //     getVersionOptions: Outlet.bDDP_Outlet_getVersion
    // ): Promise<Outlet.bDDP_Outlet_getVersion> => {};

    // export const startUpgrade = async (
    //     startUpgradeOptions: Outlet.bDDP_Outlet_startUpgrade
    // ): Promise<Outlet.bUDP_Outlet_startUpgrade> => {};
}

export default Outlet;
