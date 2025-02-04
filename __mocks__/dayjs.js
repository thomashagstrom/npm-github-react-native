const dayjs = jest.requireActual("dayjs");
const utcModule = jest.requireActual('dayjs/plugin/utc')
const relativeTime = jest.requireActual('dayjs/plugin/relativeTime')
const durationModule = jest.requireActual('dayjs/plugin/duration')
const localizedFormat = jest.requireActual('dayjs/plugin/localizedFormat')

dayjs.extend(utcModule);
dayjs.extend(localizedFormat);
dayjs.extend(durationModule);
dayjs.extend(relativeTime);

module.exports = {
    __esModule: true,
    ...dayjs,
    default: dayjs,
    utc: jest.fn().mockReturnValue(dayjs.utc(new Date(Date.UTC(2017, 1, 1))))
};