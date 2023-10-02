import React from "react";
import { Form, useFormik } from "formik";
import {
  Button,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { validationsRegistered } from "./Validation";
import { useDispatch, useSelector } from "react-redux";
import { authAsync, authRegisterAsync } from "../../service";
import { useNavigate } from "react-router-dom";

function Registered() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationsRegistered,
    onSubmit: async (values, bag) => {
      await dispatch(
        authRegisterAsync({
          userName: values.userName,
          password: values.password,
        })
      );
      navigate("/login");
    },
  });
  return (
    <div>
      <h3 style={{ color: "white", fontSize: "40px" }}>Register</h3>

      <div className="divLogin">
        <form style={{ marginTop: "15px" }}>
          <InputLabel style={{ display: "flex" }}>Username</InputLabel>
          <Input
            style={{ width: "300px", marginTop: "5px", marginBottom: "20px" }}
            name="userName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.errors.userName && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.userName}
            </div>
          )}
          <InputLabel style={{ display: "flex" }}>Password</InputLabel>
          <Input
            style={{ width: "300px", marginTop: "5px", marginBottom: "5px" }}
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.password}
            </div>
          )}
          <InputLabel style={{ display: "flex" }}>Password Confirm</InputLabel>
          <Input
            style={{ width: "300px", marginTop: "5px", marginBottom: "5px" }}
            name="passwordConfirm"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
          />
          {formik.errors.passwordConfirm && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.passwordConfirm}
            </div>
          )}
          <div style={{ marginTop: "10px" }}>
            <FormHelperText style={{ margin: 20, textAlign: "center" }}>
              Are you already registered?
            </FormHelperText>

            <Button
              onClick={formik.handleSubmit}
              variant="contained"
              style={{
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Registered
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registered;
