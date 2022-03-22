const Reducer = (state, action) => {
     switch (action.type){
          case "logout":
               alert(state.isLoggedOut)
               return {isLoggedOut: !state.isLoggedOut}
          default:
               return {isLoggedOut: state.isLoggedOut}
     }

};

export default Reducer;
