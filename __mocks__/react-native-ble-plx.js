const mockStateChange = jest.fn();

class BleManager {
  state(){
    return Promise.resolve('yellow')
  } 
  constructor() {
  }

  localName = 'green'

  onStateChange() {}

  startDeviceScan(){
    return Promise.resolve([])
  }
}

module.exports = {
  BleManager: BleManager
}