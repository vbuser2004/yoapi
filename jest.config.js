export default {
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
    setupFiles: ['<rootDir>/jest/setEnvVars.js'],
};
