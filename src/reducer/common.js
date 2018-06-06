import name from '../action/name';

export default (state = {}, action) => {
  switch (action.type) {
    case name.LOAD_STATE :
      return Object.assign({}, state, action.payload)
    default :
      return Object.assign({}, state, action.payload)
  }
}