const action = {
  UPDATE_PROFILE_REQUEST: "UPDATE_PROFILE_REQUEST",
  UPDATE_PROFILE_SUCSSES: "UPDATE_PROFILE_SUCSSES",

  updateProfile: () => ({
    type: action.UPDATE_PROFILE_REQUEST,
  }),

  FAVOURIT_FRIEND_SUCSSES: "FAVOURIT_FRIEND_SUCSSES",

  favouriteFriend: (data) => ({
    type: action.FAVOURIT_FRIEND_SUCSSES,
    data,
  }),
};

export default action;
