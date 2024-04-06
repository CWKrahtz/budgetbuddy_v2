export default {
    collectCoverage : true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',//jsdom for our frontend testing
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],//specify setup
    moduleNameMapper: {//convery our css files to not break.
        '\\.(css|less|scss)$': 'identity-obj-proxy'
    }
}