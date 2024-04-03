export default {
    collectCoverage : true,
    collectCoverageForm: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFileAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy'
    }
}