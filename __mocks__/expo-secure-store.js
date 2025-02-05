module.exports = {
    getItemAsync: (key) => Promise.resolve("jest" + key),
    setItemAsync: () => Promise.resolve()
}