export const LoginValidation=(userNo,password)=>{
    const errors={};
     if (!userNo) {
      console.log(userNo)
    errors.userNo = "User No is required";
  } else if (!/^\d+$/.test(userNo)) {
    errors.userNo = "User No must contain numbers only";
  }

  if (!password) {
    errors.password = "Password is required";
  } 
  // else if (
  //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]).{8,16}$/.test(password)
  // ) {
  //   errors.password =
  //     "Password must be 8–16 characters and include uppercase, lowercase, number, and special character";
  // }
    return errors;
}