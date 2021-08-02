export default (state = { Systemdata: {} }, action) => {
    switch (action.type) {
      case "systemdata":
        return action.payload;
      default:
        return state;
    }
  };