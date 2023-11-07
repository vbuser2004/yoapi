import * as HomeTypes from '../../../../types/yolink/Home.js';
import { sendRequest } from '../../../request/client.js';
import { Store } from '../../../../types/Store.js';
class Home {
    getDevs = async () => {
        const devList = await this.getDeviceList();
        if (devList.code !== '000000')
            throw new Error('Devices Not Returned');
        const safeDevList = HomeTypes.bUDP_Home_DeviceList_Schema.safeParse(devList);
        if (!safeDevList.success)
            throw new Error('Devices Not Returned 1');
        let devArray = [];
        safeDevList.data.data.devices.map((item) => {
            if (item.type !== 'Hub') {
                const classname = item.type;
                let tempDev;
                tempDev = new Store[classname](item);
                devArray.push(tempDev);
            }
        });
        return devArray;
    };
    getDeviceList = async (msgid = new Date().getTime().toString()) => {
        const safeResp = await sendRequest({
            method: 'Home.getDeviceList',
            msgid,
        });
        // If error send error data
        if (!safeResp.success)
            return safeResp.data;
        // Not an error so Verify it is valid Outlet response
        const homeState = HomeTypes.bUDP_Home_DeviceList_Schema.safeParse(safeResp.data);
        if (!homeState.success)
            throw new Error('Invalid Server Response');
        return homeState.data;
    };
}
export default Home;
//# sourceMappingURL=index.js.map