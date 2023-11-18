/* *************
 * Sample Test Environment Variables
 *
 * This should be in a file located at '.jest/setEnvVars.js'
 * This file location should be listed in your jest.config.js file:
 *   export default {
 *     transform: {
 *        '^.+\\.(t|j)sx?$': ['@swc/jest'],
 *    },
 *    setupFiles: ['<rootDir>/jest/setEnvVars.js'],
 *   };
 *
 * ************
 */
process.env.UAID = 'YOUR UAID';
process.env.SECRET_KEY = 'YOUR SECRET KEY';

// Valid Device Target ID's and Tokens
// ** FILL IN YOUR VALID ID AND TOKENS
process.env.OUTLET_TARGET_DEV = 'VALID ID';
process.env.OUTLET_TOKEN = 'VALID TOKEN';

process.env.MOTION_TARGET_DEV = 'VALID ID';
process.env.MOTION_TOKEN = 'VALID TOKEN';

process.env.DOOR_SENSOR_TARGET_DEV = 'VALID ID';
process.env.DOOR_SENSOR_TOKEN = 'VALID TOKEN';

process.env.HUB_TARGET_DEV = 'VALID ID';
process.env.HUB_TOKEN = 'VALID TOKEN';

// Invalid Device Target ID's and Tokens
// These will generate failed responses for testing
process.env.OUTLET_TARGET_DEV_FAIL = 'test';
process.env.OUTLET_TOKEN_FAIL = 'test';

process.env.MOTION_TARGET_DEV_FAIL = 'test';
process.env.MOTION_TOKEN_FAIL = 'test';

process.env.DOOR_SENSOR_TARGET_DEV_FAIL = 'test';
process.env.DOOR_SENSOR_TOKEN_FAIL = 'test';

process.env.HUB_TARGET_DEV_FAIL = 'test';
process.env.HUB_TOKEN_FAIL = 'test';
