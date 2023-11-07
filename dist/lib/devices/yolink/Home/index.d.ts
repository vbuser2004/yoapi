import * as HomeTypes from '../../../../types/yolink/Home.js';
import { ApiError } from '../../../../types/ApiError.js';
declare class Home {
    getDevs: () => Promise<any>;
    getDeviceList: (msgid?: string) => Promise<HomeTypes.bUDP_Home_DeviceList | ApiError>;
}
export default Home;
