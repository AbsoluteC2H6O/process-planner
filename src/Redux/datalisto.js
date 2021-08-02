export default (state = { Datalisto: {} }, action) => {
    switch (action.type) {
      case "datalisto":
        return action.payload;
      default:
        return state;
    }
  };