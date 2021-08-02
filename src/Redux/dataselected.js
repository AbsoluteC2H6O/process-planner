export default (state = { Dataselected: {} }, action) => {
    switch (action.type) {
      case "dataselected":
        return action.payload;
      default:
        return state;
    }
  };