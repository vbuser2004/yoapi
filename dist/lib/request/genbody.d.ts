import { baseBDDP } from "../../types/BasicDataPacket.js";
export declare const generateBody: (packet: baseBDDP) => {
    time: string;
    method: string;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
    token?: string | undefined;
};
