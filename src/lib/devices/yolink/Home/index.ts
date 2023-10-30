import * as HomeTypes from "../../../../types/yolink/Home.js";
import { sendRequest } from "../../../request/client.js";
import { ApiError } from "../../../../types/ApiError.js";

class Home {
  // TODO: Return an array of all device classes
  //getAllDevices = async () => {``};

  getDeviceList = async (
    msgid: string = new Date().getTime().toString()
  ): Promise<HomeTypes.bUDP_Home_DeviceList | ApiError> => {
    const safeResp = await sendRequest({
      method: "Home.getDeviceList",
      msgid,
    });

    // If error send error data
    if (!safeResp.success) return safeResp.data;

    // Not an error so Verify it is valid Outlet response
    const homeState = HomeTypes.bUDP_Home_DeviceList_Schema.safeParse(
      safeResp.data
    );

    if (!homeState.success) throw new Error("Invalid Server Response");

    return homeState.data;
  };
}

export default Home;
