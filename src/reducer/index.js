export default function reducer(state={
    device:false,
    deviceGroup : false,
    error: null,
  }, action) {

    switch (action.type) {
      case "DEVICE_CHECK": {
        state =  {...state,device:true}
        break;
      }
       case "DEVICE_UNCHECK": {
        state =  {...state,device:false}
        break;
      }
      case "DEVICE_GROUP_CHECK": {
        state =  {...state,deviceGroup:true}
        break;
        
      }
      case "DEVICE_GROUP_UNCHECK": {
        state =  {...state,deviceGroup:false}
        break;
      }
      default : {
        return state
      }
    }

    return state
}