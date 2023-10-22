import * as Outlet from '../../../types/yolink/Outlet.js';

export const getState = async (
    getStateOptions: Outlet.bUDP_Outlet_getState
) => {
    const isGetState = Outlet.bUDP_Outlet_getState_Schema.safeParse(getState);
};
