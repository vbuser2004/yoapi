import Device from '../Device/index.js';
import { sendRequest } from '../../../request/client.js';
import * as OutletTypes from '../../../../types/yolink/Outlet.js';
import { getDaysOfWeekMask } from '../../../utility/daysofweek.js';
import { generateError } from '../../../utility/createerror.js';
class Outlet extends Device {
    // FUNCTIONS
    sendOutletRequest = async (method, params = {}, msgid = new Date().getTime().toString()) => {
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
        if (!isValidBody.success)
            return await generateError('700102', msgid, `Outlet.${method}`);
        // Send request
        const safeResp = await sendRequest(msgBody);
        // If error send error data
        if (!safeResp.success)
            return safeResp.data;
        //@ts-ignore ignore 'any' error as schema will be present
        const outletState = OutletTypes[`bUDP_Outlet_${method}_Schema`].safeParse(safeResp.data);
        if (!outletState.success)
            return await generateError('700101', msgid, `Outlet.${method}`);
        return outletState.data;
    };
    getState = async (msgid) => {
        return await this.sendOutletRequest('getState', {}, msgid);
    };
    setState = async (state, msgid) => {
        return await this.sendOutletRequest('setState', { state }, msgid);
    };
    setDelay = async (delayOn = 0, delayOff = 0, msgid) => {
        return await this.sendOutletRequest('setDelay', { delayOn, delayOff }, msgid);
    };
    getSchedules = async (msgid) => {
        return await this.sendOutletRequest('getSchedules', {}, msgid);
    };
    setSchedules = async (scheduleList, msgid) => {
        const finalSchedule = scheduleList.map((sched) => {
            // Get Mask from weekdays if not already provided
            if (sched.week <= 0) {
                const weekMask = getDaysOfWeekMask(sched.weekdays);
                delete sched.weekdays;
                sched.week = weekMask;
            }
            return { [sched.index]: { ...sched } };
        });
        return await this.sendOutletRequest('setSchedules', {
            sches: finalSchedule,
        }, msgid);
    };
}
export default Outlet;
//# sourceMappingURL=index.js.map