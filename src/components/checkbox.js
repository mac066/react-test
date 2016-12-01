export default (state = false, action) => {
  switch (action.type) {
    case 'checked':
      return true
    case 'unChecked':
      return false
    default:
      return state
  }
}