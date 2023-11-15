import yo from "./SetUpYoyoApi";

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

// Outlet Class
const goodOutlet = yo.Outlet({
  type: "Outlet",
  deviceId: targetOutlet!,
  token: targetToken!,
});
const bogusOl = yo.Outlet({
  type: "Outlet",
  deviceId: bogusOutlet!,
  token: bogusToken!,
});

// Door Sensor Class
const goodDoorSensor = yo.DoorSensor({
  type: "DoorSensor",
  deviceId: targetDoorSensor!,
  token: targetDSToken!,
});

const bogusDS = yo.DoorSensor({
  type: "DoorSensor",
  deviceId: bogusDoorSensor!,
  token: bogusDSToken!,
});

// Motion Sensor Class
const goodMotionSensor = yo.MotionSensor({
  type: "MotionSensor",
  deviceId: targetMotionSensor!,
  token: targetMSToken!,
});

const bogusMS = yo.MotionSensor({
  type: "MotionSensor",
  deviceId: bogusMotionSensor!,
  token: bogusMSToken!,
});

describe("Home Tests", () => {
  test("Get All Devices", async () => {
    const result = await yo.Home().getDeviceList();
    expect(result).toBeDefined();
    expect(result.code).toBe("000000");
  });

  test("Get All Devices with Specified Message ID", async () => {
    const result = await yo.Home().getDeviceList("MyMessageId");
    expect(result.msgid).toBe("MyMessageId");
  });

  test("Expect Result Code to be 000000", async () => {
    const result = await yo.Home().getDeviceList();
    expect(result.code).toBe("000000");
  });
});

describe("Outlet Tests", () => {
  test("Get Outlet State", async () => {
    const result = await goodOutlet.getState();
    expect(result).toBeDefined();
    expect(result.code).toBe("000000");
  });

  test("Verify Model Name", () => {
    const result = goodOutlet.type;
    expect(result).toBe("Outlet");
  });

  test("Expect Get Schedules Code to be 000000", async () => {
    const result = await goodOutlet.getSchedules();
    expect(result.code).toBe("000000");
  });

  test("Expect an Error in Code", async () => {
    const result = await bogusOl.getState();
    expect(result.code).toBe("000103");
  });
});

describe("Door Sensor Tests", () => {
  test("Get Door State", async () => {
    const result = await goodDoorSensor.getState();
    expect(result).toBeDefined();
    expect(result.code).toBe("000000");
  });

  test("Verify Model Name", () => {
    const result = goodDoorSensor.type;
    expect(result).toBe("DoorSensor");
  });

  test("Expect an Error in Code", async () => {
    const result = await bogusOl.getState();
    expect(result.code).toBe("000103");
  });
});

describe("Motion Sensor Tests", () => {
  test("Get Motion Sensor State", async () => {
    const result = await goodMotionSensor.getState();
    expect(result).toBeDefined();
    expect(result.code).toBe("000000");
  });

  test("Verify Model Name", () => {
    const result = goodMotionSensor.type;
    expect(result).toBe("MotionSensor");
  });

  test("Expect an Error in Code", async () => {
    const result = await bogusOl.getState();
    expect(result.code).toBe("000103");
  });
});
