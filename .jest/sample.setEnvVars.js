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
process.env.UAID = "YOUR UAID";
process.env.SECRET_KEY = "YOUR SECRET KEY";

// Valid Device Target ID's and Tokens
process.env.OUTLET_TARGET_DEV = "test";
process.env.OUTLET_TOKEN = "test";

process.env.MOTION_TARGET_DEV = "test";
process.env.MOTION_TOKEN = "test";

process.env.DOOR_SENSOR_TARGET_DEV = "test";
process.env.DOOR_SENSOR_TOKEN = "test";

// Invalid Device Target ID's and Tokens
// These will generate failed responses for testing
process.env.OUTLET_TARGET_DEV = "test";
process.env.OUTLET_TOKEN = "test";

process.env.MOTION_TARGET_DEV = "test";
process.env.MOTION_TOKEN = "test";

process.env.DOOR_SENSOR_TARGET_DEV = "test";
process.env.DOOR_SENSOR_TOKEN = "test";
