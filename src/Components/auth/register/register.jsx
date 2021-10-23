import { Form, Formik, Field } from "formik";
import FieldComponent from "./textfield.jsx";
import DyanmicformComponent from "./dynamicform";

import * as yup from "yup";

function RegisterComponent() {
  const validators = yup.object({
    username: yup
      .string()
      .required("username is Required")
      .min(5, "Minimum 5 Characters")
      .max(10, "Maximum 10 Characters"),
    email: yup
      .string()
      .required("Email is Required")
      .email("Email is not valid"),
    password: yup
      .string()
      .required("Password is Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Confirm your password !"),
    gender: yup.string().required("Gender is Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
          active: false,
          hobbies: [""],
          gender: "",
        }}
        validationSchema={validators}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <div className="container my-4 w-50">
            <h1>Register</h1>
            <Form>
              <FieldComponent label="User Name" name="username" type="text" />
              <FieldComponent label="E-mail" name="email" type="email" />
              <FieldComponent
                label="Password"
                name="password"
                type="password"
              />
              <FieldComponent
                label="Confirm Password"
                name="confirmpassword"
                type="password"
              />
              <div className="form-check">
                <Field
                  name="active"
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Active ?
                </label>
              </div>
              <Field
                name="gender"
                as="select"
                multiple={false}
                className="form-control"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              {formik.errors.gender && formik.touched.gender && (
                <div>{formik.errors.gender}</div>
              )}

              <DyanmicformComponent name="hobbies" label="My Hobbies" />

              <button className="btn btn-primary px-5 my-2" type="submit">
                Register
              </button>
              <button
                className="btn btn-outline-danger px-3 my-2 mx-3"
                type="reset"
              >
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RegisterComponent;
