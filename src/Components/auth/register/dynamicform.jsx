import { FieldArray, Field } from "formik";
export default function DyanmicformComponent(name) {
  return (
    <div className="form-group">
      <label htmlFor="hobbies">My hobbies</label>
      <FieldArray name="hobbies">
        {(fieldArrayProps) => {
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
                  <h6>Fill to add another one</h6>
                </div>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
}
