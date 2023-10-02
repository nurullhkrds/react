import React from "react";
import {  useFormik } from "formik";
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import '../../styles/Auth.css'
import { validationsLogin } from "./Validation";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAsync } from "../../service";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema:validationsLogin,
    onSubmit: async (values, bag) => {
      
      await dispatch(authLoginAsync(values));
      navigate(0)

    },
  });
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h3 style={{color:"white",fontSize:"40px"}}>Login</h3>
      <div className="divLogin" >
      <form onSubmit={formik.handleSubmit} style={{marginTop:"15px"}}>
        <InputLabel style={{display:"flex"}}>Username</InputLabel>
        <Input
        style={{width:"300px",marginTop:"5px",marginBottom:"20px"}}
        name="userName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        />
        {formik.errors.userName&&<div style={{color:"red",fontSize:"12px"}}>{formik.errors.userName}</div>}
        <InputLabel style={{display:"flex",marginTop:"10px"}}>Password</InputLabel>
        <Input
         style={{width:"300px",marginTop:"5px",marginBottom:"5px"}}
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}

        />
         {formik.errors.password&&<div  style={{color:"red",fontSize:"12px"}}>{formik.errors.password}</div>}
        <div style={{marginTop:"10px"}}>
        <Button
                onClick={formik.handleSubmit}

          variant="contained"
          style={{
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            color: "white",
            marginBottom:"10px"

          }}
        >
          Login
        </Button>
        </div>
    
       
 
   </form>

    </div>
    </div>
    
  );
}

export default Login;
