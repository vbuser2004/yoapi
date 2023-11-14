import yo from "./SetUpYoyoApi";

const targetOutlet = process.env.OUTLET_TARGET_DEV;
const targetToken = process.env.OUTLET_TOKEN;
const bogusOutlet = process.env.OUTLET_TARGET_DEV_FAIL;
const bogusToken = process.env.OUTLET_TOKEN_FAIL;

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

describe("Home Tests", () => {
  test("Get All Devices", async () => {
    const result = await yo.Home().getDeviceList();
    expect(result).toBeDefined();
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
