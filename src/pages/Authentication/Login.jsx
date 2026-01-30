import React, { useState,useEffect } from 'react'
import { Box, Card, CardContent,TextField,Typography,Button, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from '@mui/icons-material/Person';
import {LoginValidation} from '../../validation/Authentication/LoginValidation'
import {useLogin} from '../../hooks/Authentication/useLogin'
import { useNavigate } from "react-router-dom";
function Login(){
        const [showPassword, setShowPassword] = useState(false);
        const [userNo,setUserNo]=useState('');
        const [password,setPassword]=useState('');
        const [errors,setErrors]=useState({});
        const { login, data, loading, error } = useLogin();
        const navigate=useNavigate();
    //Login Handler
    const handelLogin=()=>{
      const validationError=LoginValidation(userNo,password)
      setErrors(validationError);
      if(Object.keys(validationError).length>0) return;
      login(userNo,password)
    };

    // ✅ Redirect on successful login
useEffect(() => {
  if (data?.isValid) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userName", data.userName);
    localStorage.setItem("loginTime", Date.now()); // ✅ store login time
    navigate("/dashboard", { replace: true });
  }
}, [data, navigate]);

    return(
        <>
        <Card  sx={{width:350,mx:"auto",mt:18,borderRadius:3,background:"#ffffff",boxShadow:"0 12px 30px rgb(0,0,0,0.42)"}}>
            <CardContent  sx={{display:'flex',flexDirection:"column",alignItems:"center",gap:2}} >
                <Typography textAlign={'center'} fontSize={20} fontWeight={1000}>Login</Typography>
                <Box mt={2}  >
                    <TextField size='small' placeholder='UserNo'variant='standard' fullWidth 
                    onChange={(e)=>setUserNo(e.target.value)}
                    error={!!errors.userNo}
                    helperText={errors.userNo}
                    value={userNo}
                    slotProps={{
    input: {
      endAdornment: (
        <InputAdornment position="end">
          <PersonIcon fontSize="small" />
        </InputAdornment>
      )
    }
  }}  />
                </Box>

                <Box mt={2}>
                   <TextField
  type={showPassword ? "text" : "password"}
  size="small"
  placeholder="Password"
  variant="standard"
  fullWidth
  onChange={(e)=>setPassword(e.target.value)}
  value={password}
  error={!!errors.password}
  helperText={errors.password}
  slotProps={{
    input: {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      )
    }
  }}
/>
                </Box>
                <Box mt={2} sx={{display:"flex",gap:2,mt:2}}>
                   <Button variant="contained" onClick={handelLogin}>Login</Button>
                     {/* <Button variant="outlined">Cancel</Button>
                    <Button variant="text">Cancel</Button> */}
                </Box>
            </CardContent>
        </Card>
        </>
    )
}
export default Login