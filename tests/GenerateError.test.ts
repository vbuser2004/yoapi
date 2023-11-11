import { generateError } from '../dist/lib/utility/createerror.js';

describe('Test if generate error works for valid error', () => {
    // Cycle through Error List
    const errorList = ['700101', '700102', '700103'];
    errorList.map((err) => {
        test(`Test Error # ${err}`, () => {
            expect(generateError(err, 'noMsgsId', 'Outlet.getState').code).toBe(
                err
            );
        });
    });

    test('For non-existant error - should return 700999', () => {
        expect(generateError('555555', 'noMgsId', 'Outlet.getState').code).toBe(
            '700999'
        );
    });

    test('Error object returns matches ApiError', () => {
        const res = generateError('700102', 'noMsgId', 'MotionSensor.getState');
        expect(res).toMatchObject({
            code: '700102',
            data: {},
            desc: 'Invalid Request Body',
            method: 'MotionSensor.getState',
            msgid: 'noMsgId',
            time: res.time,
        });
        expect(res).toBeDefined();
    });
});
