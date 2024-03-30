import yo from './SetUpYoyoApi';

// Outlet
const targetOutlet = process.env.OUTLET_TARGET_DEV;
const targetToken = process.env.OUTLET_TOKEN;
const bogusOutlet = process.env.OUTLET_TARGET_DEV_FAIL;
const bogusToken = process.env.OUTLET_TOKEN_FAIL;
// Door Sensor
const targetDoorSensor = process.env.DOOR_SENSOR_TARGET_DEV;
const targetDSToken = process.env.DOOR_SENSOR_TOKEN;
const bogusDoorSensor = process.env.DOOR_SENSOR_TARGET_DEV_FAIL;
const bogusDSToken = process.env.DOOR_SENSOR_TOKEN_FAIL;
// Motion Sensor
const targetMotionSensor = process.env.MOTION_TARGET_DEV;
const targetMSToken = process.env.MOTION_TOKEN;
const bogusMotionSensor = process.env.MOTION_TARGET_DEV_FAIL;
const bogusMSToken = process.env.MOTION_TOKEN_FAIL;
// Garage Door Sensor
const garageDoorSensor = process.env.GARAGE_DOOR_SENSOR_TARGET_DEV;
const garageDoorSensorToken = process.env.GARAGE_DOOR_SENSOR_TOKEN;
const bogusGarageDoorSensor = process.env.GARAGE_DOOR_SENSOR_TARGET_DEV_FAIL;
const bogusGarageDoorSensorToken = process.env.GARAGE_DOOR_SENSOR_TOKEN_FAIL;
// Garage Door Control
const garageControl = process.env.GARAGE_CONTROL_TARGET_DEV;
const garageControlToken = process.env.GARAGE_CONTROL_TOKEN;
const bogusGarageControl = process.env.GARAGE_CONTROL_TARGET_DEV_FAIL;
const bogusGarageControlToken = process.env.GARAGE_CONTROL_TOKEN_FAIL;
// Hub
const targetHub = process.env.HUB_TARGET_DEV;
const targetHubToken = process.env.HUB_TOKEN;
const bogusHub = process.env.HUB_TARGET_DEV_FAIL;
const bogusHubToken = process.env.HUB_TOKEN_FAIL;

// Outlet Class
const goodOutlet = yo.Outlet({
    type: 'Outlet',
    deviceId: targetOutlet!,
    token: targetToken!,
});
const bogusOl = yo.Outlet({
    type: 'Outlet',
    deviceId: bogusOutlet!,
    token: bogusToken!,
});

// Door Sensor Class
const goodDoorSensor = yo.DoorSensor({
    type: 'DoorSensor',
    deviceId: targetDoorSensor!,
    token: targetDSToken!,
});

const bogusDS = yo.DoorSensor({
    type: 'DoorSensor',
    deviceId: bogusDoorSensor!,
    token: bogusDSToken!,
});

// Motion Sensor Class
const goodMotionSensor = yo.MotionSensor({
    type: 'MotionSensor',
    deviceId: targetMotionSensor!,
    token: targetMSToken!,
});

const bogusMS = yo.MotionSensor({
    type: 'MotionSensor',
    deviceId: bogusMotionSensor!,
    token: bogusMSToken!,
});

const goodGarageSensor = yo.GarageSensor({
    type: 'DoorSensor',
    deviceId: garageDoorSensor!,
    token: garageDoorSensorToken!,
});

const bogusGDS = yo.GarageSensor({
    type: 'DoorSensor',
    deviceId: bogusGarageDoorSensor!,
    token: bogusGarageDoorSensorToken!,
});

const goodGarageControl = yo.GarageControl({
    type: 'GarageDoor',
    deviceId: garageControl!,
    token: garageControlToken!,
});

const bogusGC = yo.GarageControl({
    type: 'GarageDoor',
    deviceId: bogusGarageControl!,
    token: bogusGarageControlToken!,
});

// Hub Class
const goodHub = yo.Hub({
    type: 'Hub',
    deviceId: targetHub!,
    token: targetHubToken!,
});

const bogusHb = yo.Hub({
    type: 'Hub',
    deviceId: bogusHub!,
    token: bogusHubToken!,
});

describe('Home Tests', () => {
    test('Get All Devices', async () => {
        const result = await yo.Home().getDeviceList();
        expect(result).toBeDefined();
        expect(result.code).toBe('000000');
    });

    test('Get All Devices with Specified Message ID', async () => {
        const result = await yo.Home().getDeviceList('MyMessageId');
        expect(result.msgid).toBe('MyMessageId');
    });

    test('Get General Info', async () => {
        const result = await yo.Home().getGeneralInfo('NewMessageId');
        expect(result.msgid).toBe('NewMessageId');
        expect(result.code).toBe('000000');
        expect(result.data).toHaveProperty('id');
    });

    test('Expect Result Code to be 000000', async () => {
        const result = await yo.Home().getDeviceList();
        expect(result.code).toBe('000000');
    });
});

describe('Outlet Tests', () => {
    test('Get Outlet State', async () => {
        const result = await goodOutlet.getState();
        expect(result).toBeDefined();
        expect(result.code).toBe('000000');
    });

    test('Verify Model Name', () => {
        const result = goodOutlet.type;
        expect(result).toBe('Outlet');
    });

    test('Expect Get Schedules Code to be 000000', async () => {
        const result = await goodOutlet.getSchedules();
        expect(result.code).toBe('000000');
    });

    test('Expect an Error in Code', async () => {
        const result = await bogusOl.getState();
        expect(result.code).toBe('000103');
    });
});

describe('Door Sensor Tests', () => {
    test('Get Door State', async () => {
        const result = await goodDoorSensor.getState();
        expect(result).toBeDefined();
        expect(result.code).toBe('000000');
    });

    test('Verify Model Name', () => {
        const result = goodDoorSensor.type;
        expect(result).toBe('DoorSensor');
    });

    test('Expect an Error in Code', async () => {
        const result = await bogusDS.getState();
        expect(result.code).toBe('000103');
    });
});

describe('Motion Sensor Tests', () => {
    test('Get Motion Sensor State', async () => {
        const result = await goodMotionSensor.getState();
        expect(result).toBeDefined();
        expect(result.code).toBe('000000');
    });

    test('Verify Model Name', () => {
        const result = goodMotionSensor.type;
        expect(result).toBe('MotionSensor');
    });

    test('Expect an Error in Code', async () => {
        const result = await bogusMS.getState();
        expect(result.code).toBe('000103');
    });
});

describe('Garage Sensor Tests', () => {
    test('Get Door State', async () => {
        const result = await goodGarageSensor.getState();
        expect(result).toBeDefined();
        expect(result.code).toBe('000000');
    });

    test('Verify Model Name', () => {
        const result = goodGarageSensor.type;
        expect(result).toBe('DoorSensor');
    });

    test('Expect an Error in Code', async () => {
        const result = await bogusGDS.getState();
        expect(result.code).toBe('000103');
    });
});

describe('Garage Control Tests', () => {
    test('Get Garage Control State', async () => {
        const result = await goodGarageControl.getState();
        expect(result).toBeDefined();
        expect(result.code).toBe('000000');
    });

    test('Verify Model Name', () => {
        const result = goodGarageControl.type;
        expect(result).toBe('GarageDoor');
    });

    test('Expect an Error in Code', async () => {
        const result = await bogusGDS.getState();
        expect(result.code).toBe('000103');
    });
});
describe('Hub Tests', () => {
    test('Get Hub State', async () => {
        const result = await goodHub.getState();
        expect(result).toBeDefined();
        expect(result.data).toHaveProperty('online');
        expect(result.code).toBe('000000');
    });

    test('Verify Model Name', () => {
        const result = goodHub.type;
        expect(result).toBe('Hub');
    });

    test('Expect an Error in Code', async () => {
        const result = await bogusHb.getState();
        expect(result.code).toBe('000103');
    });
});
