import { sendRequestGen } from '../../client.js';
import * as Outlet from '../../../types/yolink/Outlet.js';

export const getState = async (
    getStateOptions: Outlet.bDDP_Outlet_getState
): Promise<string> => {
    const resp = await sendRequestGen(getStateOptions);

    return resp;
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
