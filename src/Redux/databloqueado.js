export default (state = { Databloqueado: {} }, action) => {
    switch (action.type) {
      case "databloqueado":
        return action.payload;
      default:
        return state;
    }
  };