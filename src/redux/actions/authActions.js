
export const loginAuthAction = (user,navigate) => {
    return async (dispatch) => {
      try {
        const local= localStorage.getItem('auth');
        const auth=JSON.parse(local)
        if(auth.email===user.email&&auth.password===user.password){
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href='/';
        }
        dispatch({
          type:"LOGIN_SUCCESS",
          payload: "Success",
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: "LOGIN_FAIL",
          payload:"Failed" ,
        });
      }
    };
  };

  export const logoutAuthAction = () => {
    return (dispatch) => {
      try {
        dispatch({
          type: "LOGOUT_SUCCESS",
          payload: {},
        });
        localStorage.removeItem("user");
        window.location.href = '/';
      } catch {
        dispatch({
          type: "LOGOUT_FAIL",
          payload: {},
        });
      }
    };
  };
