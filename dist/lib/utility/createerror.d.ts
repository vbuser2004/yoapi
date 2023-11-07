export declare const generateError: (code: string, msgid: string, method: string) => Promise<{
    code: string;
    time: number;
    msgid: string;
    method: string;
    desc: string;
    data: {};
}>;
