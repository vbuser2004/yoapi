import Device from "../Device/index.js";
import { sendRequest } from "../../../request/client.js";
import * as OutletTypes from "../../../../types/yolink/Outlet.js";
import { ApiError } from "../../../../types/ApiError.js";
import { getDaysOfWeekMask } from "../../../utility/daysofweek.js";

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
    if (!isValidBody.success) throw new Error("Invalid Request Body");

    // Send request
    const safeResp = await sendRequest(msgBody);

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    //@ts-ignore ignore 'any' error as schema will be present
    const outletState = OutletTypes[`bUDP_Outlet_${method}_Schema`].safeParse(
      safeResp.data
    );

    if (!outletState.success) throw new Error("Invalid Server Response");

    return outletState.data;
  };

  getState = async (
    msgid?: string
  ): Promise<OutletTypes.bUDP_Outlet_getState | ApiError> => {
    return await this.sendOutletRequest("getState", {}, msgid);
  };

  setState = async (
    state: string,
    msgid?: string
  ): Promise<OutletTypes.bUDP_Outlet_setState | ApiError> => {
    return await this.sendOutletRequest("setState", { state }, msgid);
  };

  setDelay = async (
    delayOn: number = 0,
    delayOff: number = 0,
    msgid?: string
  ): Promise<OutletTypes.bUDP_Outlet_setDelay | ApiError> => {
    return await this.sendOutletRequest(
      "setDelay",
      { delayOn, delayOff },
      msgid
    );
  };

  getSchedules = async (
    msgid?: string
  ): Promise<OutletTypes.bUDP_Outlet_getSchedules | ApiError> => {
    return await this.sendOutletRequest("getSchedules", {}, msgid);
  };

  setSchedules = async (
    scheduleList: OutletTypes.sches,
    msgid?: string
  ): Promise<OutletTypes.bUDP_Outlet_setSchedules> => {
    const finalSchedule = scheduleList.map((sched) => {
      // Get Mask from weekdays if not already provided
      if (sched.week <= 0) {
        const weekMask = getDaysOfWeekMask(sched.weekdays!);
        delete sched.weekdays;
        sched.week = weekMask;
      }

      return { [sched.index]: { ...sched } };
    });

    return await this.sendOutletRequest(
      "setSchedules",
      {
        sches: finalSchedule,
      },
      msgid
    );
  };
}

export default Outlet;
