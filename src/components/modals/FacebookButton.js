import React, { useEffect } from "react";
import { loginFacebook } from "../../api/auth";

function FacebookButton() {
  useEffect(() => {
    console.log(process.env.REACT_APP_FACEBOOK_APP_ID);
  }, []);
  return <button onClick={loginFacebook}>Facebook login</button>;
}

export default FacebookButton;
