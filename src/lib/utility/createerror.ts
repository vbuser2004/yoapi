export const generateError = async (
    code: string,
    msgid: string,
    method: string
) => {
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
