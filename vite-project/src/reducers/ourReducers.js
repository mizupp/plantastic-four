const initState = {
  avatar: "src/assets/img/33.png",
  plant: {},
};

const ourReducers = (state = initState, action) => {
  switch (action.type) {
    case "STORE_AVATAR":
      return {
        ...state,
        avatar: action.payload,
      };
    case "STORE_PLANT":
      return {
        ...state,
        plant: action.payload,
      };
    default:
      return state;
  }
};

export default ourReducers;
