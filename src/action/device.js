export function checkDevice() {
  return function(dispatch) {
      dispatch({type:"CHECK_DEVICE"})
  }
}

export function unCheckDevice() {
  return function(dispatch) {
      dispatch({type:"DEVICE_UNCHECK"})
  }
}
export function CheckDeviceGroup() {
  return function(dispatch) {
      dispatch({type:"DEVICE_GROUP_CHECK"})
  }
}
export function unCheckDeviceGroup() {
  return function(dispatch) {
      dispatch({type:"DEVICE_GROUP_UNCHECK"})
  }
}