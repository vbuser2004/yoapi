export const generateError = async (code, msgid, method) => {
    let desc;
    switch (code) {
        case '700101':
            desc = 'Invalid Server Response';
            break;
        case '700102':
            desc = 'Invalid Request Body';
            break;
        case '700103':
            desc = 'Authentication Error';
        default:
            code = '700999';
            desc = 'Unknown yoyoApi Error';
    }
    return {
        code,
        time: new Date().getTime(),
        msgid,
        method,
        desc,
        data: {},
    };
};
//# sourceMappingURL=createerror.js.map