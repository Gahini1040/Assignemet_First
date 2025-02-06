import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "../src/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Custom validation function
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.accessToken);
          navigate("/products");
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error :" + error.message);
      }
    },
  });

  return (
    <div className="login-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username && (
            <div style={{ color: "red" }}>{formik.errors.username}</div>
          )}

          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}

          <button type="submit">Login</button>

          {error && <div style={{ color: "red" }}>{error}</div>}
          <div style={{ opacity: "30%" }}>
            <div>Test credentials:</div>
            username: emilys
            <br />
            password: emilyspass
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
