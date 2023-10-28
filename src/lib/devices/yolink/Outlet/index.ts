import { sendRequestGen } from "../../../client.js";
import * as OutletTypes from "../../../../types/yolink/Outlet.js";

class Outlet {
  public targetDevice: string;
  public token: string;
  public params: string;

  // CONSTRUCTOR
  constructor(targetDevice: string, token: string, params: string) {
    this.targetDevice = targetDevice;
    this.token = token;
    this.params = params;
  }

  // FUNCTIONS

  getState = async (
    getStateOptions: OutletTypes.bDDP_Outlet_getState
  ): Promise<string> => {
    const resp = await sendRequestGen(getStateOptions);

    return resp;
  };
}

export default Outlet;
