import { Form, Formik, FieldArray, Field } from "formik";
import TextfieldComponent from "./textfield.jsx";

import * as yup from "yup";
import FooterComponent from "../../shared/footer/footer.jsx";
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
  });
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
          hobbies: [""],
        }}
        validationSchema={validators}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <div className="container my-4">
            <h1>Register</h1>
            <Form>
              <TextfieldComponent
                label="User Name"
                name="username"
                type="text"
              />
              <TextfieldComponent label="E-mail" name="email" type="email" />
              <TextfieldComponent
                label="Password"
                name="password"
                type="password"
              />
              <TextfieldComponent
                label="Confirm Password"
                name="confirmpassword"
                type="password"
              />

              <div className="form-group">
                <label htmlFor="hobbies">My hobbies</label>
                <FieldArray name="hobbies">
                  {(fieldArrayProps) => {
                    console.log(fieldArrayProps, "Field Array");
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { hobbies } = values;
                    return (
                      <div>
                        {hobbies.map((hobby, index) => (
                          <div key={index}>
                            <Field
                              name={`hobbies[${index}]`}
                              className="form-control w-50 d-inline my-2"
                            ></Field>

                            <button
                              onClick={() => push("")}
                              className="btn btn-primary px-5 mx-1 "
                              style={
                                hobby.toString().length === 0
                                  ? {
                                      pointerEvents: "none",
                                      cursor: "not-allowed",
                                    }
                                  : {
                                      pointerEvents: "auto",
                                      cursor: "pointer",
                                    }
                              }
                            >
                              Add
                            </button>
                            {index > 0 && (
                              <button
                                onClick={() => remove(index)}
                                className="btn btn-danger px-5 mx-1"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              <button className="btn btn-primary px-5 my-2">Register</button>
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
      <FooterComponent className="fixed-bottom" />
    </div>
  );
}

export default RegisterComponent;
