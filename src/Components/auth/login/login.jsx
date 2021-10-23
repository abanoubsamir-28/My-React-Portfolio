import { useFormik } from "formik";
import * as yup from "yup";
function LoginComponent() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => console.log(values);
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Not a valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-50 mx-auto py-5">
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="alert alert-danger">{formik.errors.email}</div>
        )}

        <label htmlFor="password">password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="alert alert-danger">{formik.errors.password}</div>
        )}

        <div className="my-2">
          <input
            className="form-check-input "
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={formik.handleChange}
            defaultChecked={formik.values.rememberMe}
          />
          <label htmlFor="rememberMe" className="form-check-label mx-2 ">
            Remember Me
          </label>
        </div>

        <div>
          <button className="my-2  btn btn-primary px-5" type="submit">
            Submit
          </button>
          <button
            className="my-2 mx-3 btn btn-outline-danger px-3"
            type="reset"
            onClick={() => formik.resetForm()}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginComponent;
