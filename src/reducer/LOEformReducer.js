

const defaultState = {
  loeHours: {
 additionalFeatures: 0,
 mobile: 0,
 frontend: 0,
 backend: 0
}
}
const LOEFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_HOURS':
      return {
        ...state,
        loeHours: {
          mobile: action.payload.mobile,
          frontend: action.payload.frontend,
          backend: action.payload.backend,
          additionalFeatures: action.payload.additionalFeatures,
        }
    }
    default:
      return state
  }
}
export default LOEFormReducer;