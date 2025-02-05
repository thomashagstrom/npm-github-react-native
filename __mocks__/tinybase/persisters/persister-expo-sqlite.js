module.exports = {
    __esModule: true,
    default: () => ({
        openDatabase: () => ({
            transaction: (callback) => callback({
                executeSql: (query, args, success, error) => success({
                    rows: {
                        _array: []
                    }
                })
            })
        })
    })
}