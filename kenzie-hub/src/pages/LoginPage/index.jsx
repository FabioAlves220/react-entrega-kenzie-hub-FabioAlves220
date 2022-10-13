import "./index.jsx";
import RegisterLogo from "../../assets/RegisterLogo.png";
import { useEffect } from "react";
import Login from "../../components/Login";
import { AppMainLogin, LogoBox } from "./styles.js";
const LoginPage = ({ setUser }) => {
  return (
    <AppMainLogin>
      <LogoBox>
        <img className="registerLogo" src={RegisterLogo} />
      </LogoBox>
      <Login setUser={setUser} />
    </AppMainLogin>
  );
};
export default LoginPage;
