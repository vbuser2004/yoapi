import Device from "../Device/index.js";
import { sendRequest } from "../../../request/client.js";
import * as MultiOutletTypes from "../../../../types/yolink/MultiOutlet.js";
import { ApiError } from "../../../../types/ApiError.js";
import { getDaysOfWeekMask } from "../../../utility/daysofweek.js";
import { generateError } from "../../../utility/createerror.js";
import generatePlugMask from "../../../utility/multiplugmask.js";

class MultiOutlet extends Device {
  // FUNCTIONS
  private sendMultiOutletRequest = async (
    method: string,
    params: object = {},
    msgid: string = new Date().getTime().toString()
  ) => {
    const msgBody = {
      targetDevice: this.deviceId,
      token: this.token,
      method: `MultiOutlet.${method}`,
      msgid,
      params,
    };

    // Ignore 'any' error as schema will be present
    const isValidBody =
      // @ts-ignore
      MultiOutletTypes[`bDDP_MultiOutlet_${method}_Schema`].safeParse(msgBody);

    // Check to make sure body is type safe
    if (!isValidBody.success)
      return generateError("700102", msgid, `MultiOutlet.${method}`);

    // Send request
    // TODO: CHECK IF ERROR - use verified body not msgbody.
    //const safeResp = await sendRequest(msgBody);
    const safeResp = await sendRequest(isValidBody.data);

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    //@ts-ignore ignore 'any' error as schema will be present
    const multioutletState = MultiOutletTypes[`bUDP_MultiOutlet_${method}_Schema`].safeParse(
      safeResp.data
    );

    if (!multioutletState.success)
      return generateError("700101", msgid, `MultiOutlet.${method}`);

    return multioutletState.data;
  };

  getState = async (
    msgid?: string
  ): Promise<MultiOutletTypes.bUDP_MultiOutlet_getState | ApiError> => {
    return await this.sendMultiOutletRequest("getState", {}, msgid);
  };


/**
 * Set the state of each plug.
 * @param {Array.<number>} plugList - An array of numbers from 1 to 8 indicating which plugs.
 * @param {Array.<string>} state - An array of strings indicating the state of each plug (open or closed).
 * @returns {Promise} - Promise that resolves to an object containing the state of each plug.
 */  
  setState = async (
    plugList: [number],
    state: [string],
    msgid?: string
  ): Promise<MultiOutletTypes.bUDP_MultiOutlet_setState | ApiError> => {
    const plugMask = generatePlugMask(plugList);

    return await this.sendMultiOutletRequest("setState", { state, chs: plugMask }, msgid);
  };

  setDelay = async (
    delayOn: number = 0,
    delayOff: number = 0,
    msgid?: string
  ): Promise<MultiOutletTypes.bUDP_MultiOutlet_setDelay | ApiError> => {
    return await this.sendMultiOutletRequest(
      "setDelay",
      { delayOn, delayOff },
      msgid
    );
  };

  getSchedules = async (
    msgid?: string
  ): Promise<MultiOutletTypes.bUDP_MultiOutlet_getSchedules | ApiError> => {
    return await this.sendMultiOutletRequest("getSchedules", {}, msgid);
  };

  /*
   *  **** Yolink API returns an ERROR with this call ****
   *  Error states that function is not available via the API.
   *
   */

  setSchedules = async (
    scheduleList: MultiOutletTypes.sches,
    msgid?: string
  ): Promise<MultiOutletTypes.bUDP_MultiOutlet_setSchedules | ApiError> => {
    const finalSchedule = scheduleList.map((sched) => {
      // Get Mask from weekdays if not already provided
      if (sched.week <= 0) {
        const weekMask = getDaysOfWeekMask(sched.weekdays!);
        delete sched.weekdays;
        sched.week = weekMask;
      }

      return { [sched.index]: { ...sched } };
    });

    return await this.sendMultiOutletRequest(
      "setSchedules",
      {
        sches: finalSchedule,
      },
      msgid
    );
  };
}

export default MultiOutlet;
