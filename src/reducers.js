import * as sa from "./actions";
const initialState = {
  title: "React Application",
  data: [],
  loading: false,
  error: {}
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case sa.REQUEST_DATA:
      return {
        ...state,
        loading: true
      };

    case sa.SUCCESS_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case sa.ERROR_DATA:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return {
        ...state
      };
  }
};

export default dataReducer;
