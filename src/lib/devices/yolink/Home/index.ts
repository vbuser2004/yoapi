import * as HomeTypes from '../../../../types/yolink/Home.js';
import { sendRequest } from '../../../request/client.js';
import { ApiError } from '../../../../types/ApiError.js';
import { Store } from '../../../../types/Store.js';
import { generateError } from '../../../utility/createerror.js';

class Home {
    // Returns list of classes from Device List
    getDevs = async () => {
        const devList = await this.getDeviceList();

        if (devList.code !== '000000')
            return generateError(
                '700101',
                devList.msgid || 'Unknown',
                'Home.getDeviceList'
            );

        const safeDevList =
            HomeTypes.bUDP_Home_DeviceList_Schema.safeParse(devList);

        if (!safeDevList.success)
            return generateError(
                '700101',
                devList.msgid || 'Unknown',
                'Home.getDeviceList'
            );

        let devArray: any = [];

        safeDevList.data.data.devices.map((item) => {
            if (item.type !== 'Hub') {
                const classname = item.type;
                let tempDev: typeof classname;
                tempDev = new Store[classname](item);

                devArray.push(tempDev);
            }
        });

        return devArray;
    };

    // Raw return of getDeviceList method
    getDeviceList = async (
        msgid: string = new Date().getTime().toString()
    ): Promise<HomeTypes.bUDP_Home_DeviceList | ApiError> => {
        const safeResp = await sendRequest({
            method: 'Home.getDeviceList',
            msgid,
        });

        // If error send error data
        if (!safeResp.success) return safeResp.data;

        // Not an error so Verify it is valid Outlet response
        const homeState = HomeTypes.bUDP_Home_DeviceList_Schema.safeParse(
            safeResp.data
        );

        if (!homeState.success)
            return generateError('700101', msgid, 'Home.getDeviceList');

        return homeState.data;
    };

    // Raw return of getDeviceList method
    getGeneralInfo = async (
        msgid: string = new Date().getTime().toString()
    ): Promise<HomeTypes.bUDP_Home_GeneralInfo | ApiError> => {
        const safeResp = await sendRequest({
            method: 'Home.getGeneralInfo',
            msgid,
        });

        // If error send error data
        if (!safeResp.success) return safeResp.data;

        // Not an error so Verify it is valid Outlet response
        const homeState = HomeTypes.bUDP_Home_GeneralInfo_Schema.safeParse(
            safeResp.data
        );

        if (!homeState.success)
            return generateError('700101', msgid, 'Home.getGeneralInfo');

        return homeState.data;
    };
}

export default Home;
