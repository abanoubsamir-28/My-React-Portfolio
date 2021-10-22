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
          hobbies: [" "],
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
                              className="btn btn-primary px-5 mx-1"
                            >
                              +
                            </button>
                            {index > 0 && (
                              <button
                                onClick={() => remove(index)}
                                className="btn btn-danger px-5 mx-1"
                              >
                                -
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

// (Formik) => {
//   <Form className="py-3">
//     <div className="container w-50">
//       <h1>Register Form</h1>
//       <div className="formgroup1 d-flex">
//         <div className="form-group col-md-6 my-2 w-50 mx-4">
//           <label htmlFor="inputEmail4" className="my-1 fw-bold">
//             Username
//           </label>
//           <input
//             type="text"
//             className="form-control "
//             placeholder="Enter your username"
//           ></input>
//         </div>
//         <div className="form-group col-md-6 my-2">
//           <label htmlFor="inputEmail4" className="my-1 fw-bold">
//             E-mail
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter your E-mail"
//           ></input>
//         </div>
//       </div>
//       <div className="formgroup2 d-flex">
//         <div className="form-group col-md-6 my-2 mx-4">
//           <label htmlFor="inputEmail4" className="my-1 fw-bold">
//             password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter your password"
//           ></input>
//         </div>
//         <div className="form-group col-md-6 my-2">
//           <label htmlFor="inputEmail4" className="my-1 fw-bold">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Confirm your Password"
//           ></input>
//         </div>
//       </div>
//       <div className="form-check mx-4">
//         <input
//           name="rememberme"
//           className="form-check-input"
//           type="checkbox"
//         ></input>
//         <label className="form-check-label" htmlFor="flexCheckDefault">
//           Active ?
//         </label>
//       </div>

//       <select name="color" className="d-block my-3 mx-4">
//         <option value="" label="Gender ?" />
//         <option value="male" label="male" />
//         <option value="female" label="female" />
//       </select>
//       <div className="formcontrol mx-4">
//         <label htmlFor="hobbies">My Hobbies</label>
//         <FieldArray name="hobbies">
//           {(fieldArrayProps) => {
//             console.log(fieldArrayProps, "fieldArrayProps");
//             // const { push, remove, form } = fieldArrayProps;
//             // const { values } = form;
//             // const { hobbies } = values;
//             return <h1>Field Array</h1>;
//           }}
//         </FieldArray>
//       </div>
//       <button type="submit" className="btn btn-primary px-5 my-4">
//         Register
//       </button>
//       <button type="reset" className="btn btn-outline-danger px-5 mx-3">
//         Reset
//       </button>
//     </div>
//   </Form>;
// };

// username: "", // required

//  email: "", // email, required

//  password: "", // required

//  confirmPassword: "",  // must match password

//  active: false, // required

//  gender: "",  // required (drop down)

//   hoppies: [""], // (field array)
