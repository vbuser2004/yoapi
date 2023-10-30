import Device from "../Device/index.js";
import { sendRequest } from "../../../request/client.js";
import * as OutletTypes from "../../../../types/yolink/Outlet.js";
import { ApiError } from "../../../../types/ApiError.js";

import { getDaysOfWeekMask } from "../../../utility/daysofweek.js";

class Outlet extends Device {
  // FUNCTIONS
  getState = async (
    msgid: string = new Date().getTime().toString()
  ): Promise<OutletTypes.bUDP_Outlet_getState | ApiError> => {
    const safeResp = await sendRequest({
      targetDevice: this.deviceId,
      token: this.token,
      method: "Outlet.getState",
      msgid,
    });

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Outlet response
    const outletState = OutletTypes.bUDP_Outlet_getState_Schema.safeParse(
      safeResp.data
    );

    if (!outletState.success) throw new Error("Invalid Server Response");

    return outletState.data;
  };

  setState = async (
    state: string,
    msgid: string = new Date().getTime().toString()
  ): Promise<OutletTypes.bUDP_Outlet_setState | ApiError> => {
    const msgBody = {
      targetDevice: this.deviceId,
      token: this.token,
      method: "Outlet.setState",
      msgid,
      params: { state },
    };

    const isValidBody =
      OutletTypes.bDDP_Outlet_setState_Schema.safeParse(msgBody);

    // Check to make sure body is type safe
    if (!isValidBody.success) throw new Error("Invalid Request Body");

    // Send request
    const safeResp = await sendRequest(msgBody);

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Outlet response
    const outletState = OutletTypes.bUDP_Outlet_setState_Schema.safeParse(
      safeResp.data
    );

    if (!outletState.success) throw new Error("Invalid Server Response");

    return outletState.data;
  };

  setDelay = async (
    delayOn: number = 0,
    delayOff: number = 0,
    msgid: string = new Date().getTime().toString()
  ): Promise<OutletTypes.bUDP_Outlet_setDelay | ApiError> => {
    const msgBody = {
      targetDevice: this.deviceId,
      token: this.token,
      method: "Outlet.setDelay",
      msgid,
      params: { delayOn, delayOff },
    };

    const isValidBody =
      OutletTypes.bDDP_Outlet_setDelay_Schema.safeParse(msgBody);

    // Check to make sure body is type safe
    if (!isValidBody.success) throw new Error("Invalid Request Body");

    const safeResp = await sendRequest(msgBody);

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Outlet response
    const outletState = OutletTypes.bUDP_Outlet_setDelay_Schema.safeParse(
      safeResp.data
    );

    if (!outletState.success) throw new Error("Invalid Server Response");

    return outletState.data;
  };

  getSchedules = async (
    msgid: string = new Date().getTime().toString()
  ): Promise<OutletTypes.bUDP_Outlet_getSchedules | ApiError> => {
    const safeResp = await sendRequest({
      targetDevice: this.deviceId,
      token: this.token,
      method: "Outlet.getSchedules",
      msgid,
    });

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Outlet response
    const outletState = OutletTypes.bUDP_Outlet_getSchedules_Schema.safeParse(
      safeResp.data
    );

    if (!outletState.success) throw new Error("Invalid Server Response");

    return outletState.data;
  };

  // export const setSchedules = async (
  //     setSchedulesOptions: Outlet.bDDP_Outlet_setSchedules
  // ): Promise<Outlet.bUDP_Outlet_setSchedules> => {};

  // export const getVersion = async (
  //     getVersionOptions: Outlet.bDDP_Outlet_getVersion
  // ): Promise<Outlet.bUDP_Outlet_getVersion> => {};

  // export const startUpgrade = async (
  //     startUpgradeOptions: Outlet.bDDP_Outlet_startUpgrade
  // ): Promise<Outlet.bUDP_Outlet_startUpgrade> => {};
}

export default Outlet;
