export declare const sendRequest: <T extends {
    method: string;
    time?: string | undefined;
    msgid?: string | undefined;
    targetDevice?: string | undefined;
    token?: string | undefined;
}>(bddpPacket: T) => Promise<{
    success: boolean;
    data: any;
}>;
