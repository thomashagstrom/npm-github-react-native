module.exports = {
    __esModule: true,
    default: {
        startAsync: jest.fn(),
        makeRedirectUri: jest.fn(),
        openAuthSessionAsync: jest.fn(),
    },
    exchangeCodeAsync: jest.fn(),
    makeRedirectUri: () => 'jest://mocked',
    useAuthRequest: jest.fn(),
    useAutoDiscovery: () => ({ authorizationEndpoint: 'jest://mocked' }),
    refreshAsync: () => Promise.resolve({ accessToken: 'jestaccess', refreshToken: 'jestrefresh' }),
}