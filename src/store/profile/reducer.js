import actions from "./actions";

const initialState = {
  profile: { location: { city: "", state: "" }, name: {}, picture: null },
  favouriteList: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_PROFILE_SUCSSES:
      return {
        ...state,
        profile: action.profile,
      };
    case actions.FAVOURIT_FRIEND_SUCSSES:
      return {
        ...state,
        favouriteList: action.data,
      };
    default:
      return state;
  }
};

export default profileReducer;
