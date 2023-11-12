import yoyoapi from '../dist/index.js';

const yo = new yoyoapi(process.env.UAID!, process.env.SECRET_KEY!);

describe('Create yoyoapi and get all devices', () => {
    test('Get All Devices', async () => {
        const result = await yo.Home().getDeviceList();

        console.log('Devices: ' + JSON.stringify(result));

        expect(result).toBeDefined();
    });
});
