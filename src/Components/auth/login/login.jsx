import { useFormik } from "formik";

function LoginComponent() {
  const formic = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberme: false,
    },
    onSubmit: (values) => console.log(JSON.stringify(values,)),
  });
  return (
    <form
      className="p-5 d-flex justify-content-center align-items-center"
      onSubmit={formic.handleSubmit}
    >
      <div className="container w-50">
        <h2 className="text-center">Login Form</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter your mail"
            value={formic.values.email}
            onChange={formic.handleChange}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={formic.values.password}
            onChange={formic.handleChange}
          ></input>
        </div>

        <div className="form-check">
          <input
            name="rememberme"
            className="form-check-input"
            type="checkbox"
            defaultChecked={formic.values.rememberme}
            onChange={formic.handleChange}
          ></input>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary px-5 my-3">
          Sign in
        </button>
        <button type="reset" className="btn btn-outline-danger px-5 my-3 mx-3">
          Reset
        </button>
        <div className="h-100">{JSON.stringify(formic)}</div>
      </div>
    </form>
  );
}

export default LoginComponent;
