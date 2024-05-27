import React, { useEffect } from "react";
import { loginFacebook } from "../../api/auth";

function FacebookButton() {
  useEffect(() => {
    console.log(process.env.REACT_APP_FACEBOOK_APP_ID);
  }, []);
  return (
    <button onClick={loginFacebook}>
      зареєструватись з допомогою facebook
    </button>
  );
}

export default FacebookButton;
