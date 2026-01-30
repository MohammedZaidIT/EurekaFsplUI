import {apiLogin} from "../../api/apiLogin";

export const LoginServices = (userNo, password) =>
  apiLogin(userNo, password);