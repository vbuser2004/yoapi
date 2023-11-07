import { z } from "zod";
import { baseBDDP_Schema } from "../BasicDataPacket.js";
export declare const bDDP_Outlet_getState_Schema: z.ZodObject<{
    time: z.ZodOptional<z.ZodString>;
    method: z.ZodString;
    msgid: z.ZodOptional<z.ZodString>;
    targetDevice: z.ZodOptional<z.ZodString>;
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    method: string;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
    token?: string | undefined;
}, {
    method: string;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
    token?: string | undefined;
}>;
export type bDDP_Outlet_getState = z.infer<typeof baseBDDP_Schema>;
export declare const bUDP_Outlet_getState_Schema: z.ZodObject<{
    code: z.ZodString;
    method: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    msgid: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        state: z.ZodEnum<["open", "closed"]>;
        delay: z.ZodObject<{
            ch: z.ZodNumber;
            on: z.ZodNumber;
            off: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            ch: number;
            on: number;
            off: number;
        }, {
            ch: number;
            on: number;
            off: number;
        }>;
        power: z.ZodOptional<z.ZodNumber>;
        watt: z.ZodOptional<z.ZodNumber>;
        version: z.ZodString;
        time: z.ZodString;
        tz: z.ZodNumber;
        loraInfo: z.ZodObject<{
            netId: z.ZodString;
            signal: z.ZodNumber;
            gatewayId: z.ZodString;
            gateways: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            netId: string;
            signal: number;
            gatewayId: string;
            gateways: number;
        }, {
            netId: string;
            signal: number;
            gatewayId: string;
            gateways: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        state: "open" | "closed";
        time: string;
        delay: {
            ch: number;
            on: number;
            off: number;
        };
        version: string;
        tz: number;
        loraInfo: {
            netId: string;
            signal: number;
            gatewayId: string;
            gateways: number;
        };
        power?: number | undefined;
        watt?: number | undefined;
    }, {
        state: "open" | "closed";
        time: string;
        delay: {
            ch: number;
            on: number;
            off: number;
        };
        version: string;
        tz: number;
        loraInfo: {
            netId: string;
            signal: number;
            gatewayId: string;
            gateways: number;
        };
        power?: number | undefined;
        watt?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    code: string;
    data: {
        state: "open" | "closed";
        time: string;
        delay: {
            ch: number;
            on: number;
            off: number;
        };
        version: string;
        tz: number;
        loraInfo: {
            netId: string;
            signal: number;
            gatewayId: string;
            gateways: number;
        };
        power?: number | undefined;
        watt?: number | undefined;
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}, {
    code: string;
    data: {
        state: "open" | "closed";
        time: string;
        delay: {
            ch: number;
            on: number;
            off: number;
        };
        version: string;
        tz: number;
        loraInfo: {
            netId: string;
            signal: number;
            gatewayId: string;
            gateways: number;
        };
        power?: number | undefined;
        watt?: number | undefined;
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type bUDP_Outlet_getState = z.infer<typeof bUDP_Outlet_getState_Schema>;
export declare const bDDP_Outlet_setState_Schema: z.ZodObject<{
    method: z.ZodString;
    token: z.ZodOptional<z.ZodString>;
    time: z.ZodOptional<z.ZodString>;
    msgid: z.ZodOptional<z.ZodString>;
    targetDevice: z.ZodOptional<z.ZodString>;
    params: z.ZodObject<{
        state: z.ZodEnum<["open", "close"]>;
    }, "strip", z.ZodTypeAny, {
        state: "open" | "close";
    }, {
        state: "open" | "close";
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        state: "open" | "close";
    };
    method: string;
    token?: string | undefined;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
}, {
    params: {
        state: "open" | "close";
    };
    method: string;
    token?: string | undefined;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
}>;
export type bDDP_Outlet_setState = z.infer<typeof bDDP_Outlet_setState_Schema>;
export declare const bUDP_Outlet_setState_Schema: z.ZodObject<{
    code: z.ZodString;
    method: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    msgid: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        state: z.ZodEnum<["open", "closed"]>;
    }, "strip", z.ZodTypeAny, {
        state: "open" | "closed";
    }, {
        state: "open" | "closed";
    }>;
}, "strip", z.ZodTypeAny, {
    code: string;
    data: {
        state: "open" | "closed";
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}, {
    code: string;
    data: {
        state: "open" | "closed";
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type bUDP_Outlet_setState = z.infer<typeof bUDP_Outlet_setState_Schema>;
export declare const bDDP_Outlet_setDelay_Schema: z.ZodObject<{
    method: z.ZodString;
    token: z.ZodOptional<z.ZodString>;
    time: z.ZodOptional<z.ZodString>;
    msgid: z.ZodOptional<z.ZodString>;
    targetDevice: z.ZodOptional<z.ZodString>;
    params: z.ZodObject<{
        delayOn: z.ZodOptional<z.ZodNumber>;
        delayOff: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        delayOn?: number | undefined;
        delayOff?: number | undefined;
    }, {
        delayOn?: number | undefined;
        delayOff?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        delayOn?: number | undefined;
        delayOff?: number | undefined;
    };
    method: string;
    token?: string | undefined;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
}, {
    params: {
        delayOn?: number | undefined;
        delayOff?: number | undefined;
    };
    method: string;
    token?: string | undefined;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
}>;
export type bDDP_Outlet_setDelay = z.infer<typeof bDDP_Outlet_setDelay_Schema>;
export declare const bUDP_Outlet_setDelay_Schema: z.ZodObject<{
    code: z.ZodString;
    method: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    msgid: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        delay: z.ZodObject<{
            on: z.ZodNumber;
            off: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            on: number;
            off: number;
        }, {
            on: number;
            off: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        delay: {
            on: number;
            off: number;
        };
    }, {
        delay: {
            on: number;
            off: number;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    code: string;
    data: {
        delay: {
            on: number;
            off: number;
        };
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}, {
    code: string;
    data: {
        delay: {
            on: number;
            off: number;
        };
    };
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type bUDP_Outlet_setDelay = z.infer<typeof bUDP_Outlet_setDelay_Schema>;
export type bDDP_Outlet_getSchedules = z.infer<typeof baseBDDP_Schema>;
export declare const bUDP_Outlet_getSchedules_Schema: z.ZodObject<{
    code: z.ZodString;
    method: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    msgid: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
        isValid: z.ZodBoolean;
        index: z.ZodNumber;
        on: z.ZodOptional<z.ZodString>;
        off: z.ZodOptional<z.ZodString>;
        week: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        isValid: boolean;
        index: number;
        week: number;
        on?: string | undefined;
        off?: string | undefined;
    }, {
        isValid: boolean;
        index: number;
        week: number;
        on?: string | undefined;
        off?: string | undefined;
    }>>, "many">;
}, "strip", z.ZodTypeAny, {
    code: string;
    data: Record<string, {
        isValid: boolean;
        index: number;
        week: number;
        on?: string | undefined;
        off?: string | undefined;
    }>[];
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}, {
    code: string;
    data: Record<string, {
        isValid: boolean;
        index: number;
        week: number;
        on?: string | undefined;
        off?: string | undefined;
    }>[];
    method: string;
    time?: number | undefined;
    msgid?: string | undefined;
    desc?: string | undefined;
}>;
export type bUDP_Outlet_getSchedules = z.infer<typeof bUDP_Outlet_getSchedules_Schema>;
export declare const bDDP_Outlet_setSchedules_Schema: z.ZodObject<{
    method: z.ZodString;
    token: z.ZodOptional<z.ZodString>;
    time: z.ZodOptional<z.ZodString>;
    msgid: z.ZodOptional<z.ZodString>;
    targetDevice: z.ZodOptional<z.ZodString>;
    params: z.ZodObject<{
        sches: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
            isValid: z.ZodBoolean;
            index: z.ZodNumber;
            on: z.ZodOptional<z.ZodString>;
            off: z.ZodOptional<z.ZodString>;
            week: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            isValid: boolean;
            index: number;
            week: number;
            on?: string | undefined;
            off?: string | undefined;
        }, {
            isValid: boolean;
            index: number;
            week: number;
            on?: string | undefined;
            off?: string | undefined;
        }>>, "many">;
    }, "strip", z.ZodTypeAny, {
        sches: Record<string, {
            isValid: boolean;
            index: number;
            week: number;
            on?: string | undefined;
            off?: string | undefined;
        }>[];
    }, {
        sches: Record<string, {
            isValid: boolean;
            index: number;
            week: number;
            on?: string | undefined;
            off?: string | undefined;
        }>[];
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        sches: Record<string, {
            isValid: boolean;
            index: number;
            week: number;
            on?: string | undefined;
            off?: string | undefined;
        }>[];
    };
    method: string;
    token?: string | undefined;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
}, {
    params: {
        sches: Record<string, {
            isValid: boolean;
            index: number;
            week: number;
            on?: string | undefined;
            off?: string | undefined;
        }>[];
    };
    method: string;
    token?: string | undefined;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
}>;
export type bDDP_Outlet_setSchedules = z.infer<typeof bDDP_Outlet_setSchedules_Schema>;
export declare const sches_Schema: z.ZodArray<z.ZodObject<{
    isValid: z.ZodBoolean;
    index: z.ZodNumber;
    on: z.ZodOptional<z.ZodString>;
    off: z.ZodOptional<z.ZodString>;
    week: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    weekdays: z.ZodOptional<z.ZodArray<z.ZodEnum<["All", "Weekdays", "Weekends", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]>, "many">>;
}, "strip", z.ZodTypeAny, {
    isValid: boolean;
    index: number;
    week: number;
    on?: string | undefined;
    off?: string | undefined;
    weekdays?: ("All" | "Weekdays" | "Weekends" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[] | undefined;
}, {
    isValid: boolean;
    index: number;
    on?: string | undefined;
    off?: string | undefined;
    week?: number | undefined;
    weekdays?: ("All" | "Weekdays" | "Weekends" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[] | undefined;
}>, "many">;
export type sches = z.infer<typeof sches_Schema>;
export type bUDP_Outlet_setSchedules = z.infer<typeof bUDP_Outlet_getSchedules_Schema>;
