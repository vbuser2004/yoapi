import Device from '../Device/index.js';
import * as OutletTypes from '../../../../types/yolink/Outlet.js';
import { ApiError } from '../../../../types/ApiError.js';
declare class Outlet extends Device {
    private sendOutletRequest;
    getState: (msgid?: string) => Promise<OutletTypes.bUDP_Outlet_getState | ApiError>;
    setState: (state: string, msgid?: string) => Promise<OutletTypes.bUDP_Outlet_setState | ApiError>;
    setDelay: (delayOn?: number, delayOff?: number, msgid?: string) => Promise<OutletTypes.bUDP_Outlet_setDelay | ApiError>;
    getSchedules: (msgid?: string) => Promise<OutletTypes.bUDP_Outlet_getSchedules | ApiError>;
    setSchedules: (scheduleList: {
        isValid: boolean;
        index: number;
        week: number;
        on?: string | undefined;
        off?: string | undefined;
        weekdays?: ("All" | "Weekdays" | "Weekends" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[] | undefined;
    }[], msgid?: string) => Promise<OutletTypes.bUDP_Outlet_setSchedules | ApiError>;
}
export default Outlet;
