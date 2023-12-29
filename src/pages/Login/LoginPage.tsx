import React from "react";
import { setUserState } from "../../redux/slice/persist";
import { useDispatch } from "../../redux/store";
import { Button } from "@material-tailwind/react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const LoginUser = () => {
    dispatch(setUserState(true));
  };
  return (
    <div className="p-10">
      <h2 className="Main-Page">Login Page</h2>
      <br />
      <Button
        placeholder="Button"
        className="rounded-lg px-2 py-1 border solid border-black"
        variant="outlined"
        onClick={LoginUser}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
