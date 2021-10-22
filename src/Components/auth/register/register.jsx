import { Form, Formik } from "formik";
import TextfieldComponent from "./textfield.jsx";
import * as yup from "yup";
function RegisterComponent() {
  const validators = yup.object({
    username: yup
      .string()
      .required("username is Required")
      .min(5, "Minimum 5 Characters")
      .max(10, "Maximum 5 Characters"),
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
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={validators}
    >
      {(formik) => (
        <div className="container my-4 ">
          <h1>Register</h1>
          {console.log(formik.values)}
          <Form>
            <TextfieldComponent label="User Name" name="username" type="text" />
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
            <button className="btn btn-primary px-5 my-2">Register</button>
            <button className="btn btn-outline-danger px-3 my-2 mx-3">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
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
