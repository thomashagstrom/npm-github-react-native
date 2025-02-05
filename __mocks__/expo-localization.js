module.exports = {
    getCalendars: jest.fn(),
    getLocales: () => [{languageCode: 'en',
        digitGroupingSeparator: 'X',
        decimalSeparator: 'Y',
        measurementSystem: 'us',
        currencySymbol: '%',
        currencyCode: 'BLK',
    }],
    getCalendars: () => [{}],
    Weekday: {
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
        SUNDAY: 7
    }
}