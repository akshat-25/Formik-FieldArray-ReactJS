import React from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  employees: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name required"),
      email: Yup.string().required("email required").email("Enter valid email"),
      password: Yup.string()
        .required("Please enter a password")
        .min(8, "Password must have at least 8 characters"),
      occupation: Yup.string().required("Occupation is required"),
      gender: Yup.string().required("Select your gender"),
      languages: Yup.array().min(1, "Select at least one language"),
    })
  ),
});
const App = () => {
  return (
    <Formik
      initialValues={{
        employees: [
          {
            name: "",
            email: "",
            password: "",
            gender: "",
            occupation: "",
            languages: [],
          },
        ],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <div className="App">
            <h1>Add Information</h1>
            <FieldArray
              name="employees"
              render={(arrayHelpers) => {
                return (
                  <div>
                    {formik.values.employees.map((employee, index) => (
                      <div key={index}>
                        <div>
                          {index > 0 && (
                            <button
                              type="button"
                              className="button2"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove
                            </button>
                          )}
                          <h2>{`Employee ${index + 1}`}</h2>
                          <div className="form-group">
                            <label
                              htmlFor={`employees.${index}.name`}
                              className="form-label"
                            >
                              User Name
                            </label>
                            <Field
                              name={`employees.${index}.name`}
                              id={`employees.${index}.name`}
                              className="form-control"
                            ></Field>
                            <ErrorMessage
                              name={`employees.${index}.name`}
                              component="span"
                              className="non-valid"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor={`employees.${index}.email`}
                              className="form-label"
                            >
                              Email
                            </label>
                            <Field
                              name={`employees.${index}.email`}
                              id={`employees.${index}.email`}
                              className="form-control"
                              placeholder="Enter your email"
                            ></Field>
                            <ErrorMessage
                              name={`employees.${index}.email`}
                              component="span"
                              className="non-valid"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor={`employees.${index}.password`}
                              className="form-label"
                            >
                              Password
                            </label>
                            <Field
                              type="password"
                              name={`employees.${index}.password`}
                              id={`employees.${index}.password`}
                              className="form-control"
                              placeholder="Password"
                            ></Field>
                            <ErrorMessage
                              component="span"
                              className="non-valid"
                              name={`employees.${index}.password`}
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor={`employees.${index}.occupation`}
                              className="form-label"
                            >
                              Occupation
                            </label>
                            <select
                              value={
                                formik?.values?.employees?.[index]?.occupation
                              }
                              className="form-select"
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `employees.${index}.occupation`,
                                  e.target.value
                                )
                              }
                            >
                              <option value=""></option>
                              <option value="student">Student</option>
                              <option value="employee">Employee</option>
                              <option value="other">Other</option>
                            </select>
                            <ErrorMessage
                              component="span"
                              className="non-valid"
                              name={`employees.${index}.occupation`}
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor={`employees.${index}.gender`}
                              value={`employees.${index}.gender`}
                              className="form-label"
                            >
                              Gender
                            </label>

                            <div>
                              <div>
                                <Field
                                  type="radio"
                                  name={`employees.${index}.gender`}
                                  value="male"
                                />
                                <label htmlFor={`employees.${index}.gender`}>
                                  Male
                                </label>
                              </div>
                              <div>
                                <Field
                                  type="radio"
                                  name={`employees.${index}.gender`}
                                  value="female"
                                />
                                <label htmlFor={`employees.${index}.gender`}>
                                  Female
                                </label>
                              </div>
                              <div>
                                <Field
                                  type="radio"
                                  name={`employees.${index}.gender`}
                                  value="other"
                                />
                                <label htmlFor={`employees.${index}.gender`}>
                                  Other
                                </label>
                              </div>
                            </div>
                            <ErrorMessage
                              name={`employees.${index}.gender`}
                              component="span"
                              className="non-valid"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor={`employees.${index}.languages`}
                              className="form-label"
                            >
                              Languages
                            </label>
                            <ErrorMessage
                              component="span"
                              className="non-valid"
                              name={`employees.${index}.languages`}
                            />
                            <div>
                              <div>
                                <Field
                                  type="checkbox"
                                  name={`employees.${index}.languages`}
                                  value="html"
                                />
                                <label htmlFor={`employees.${index}.languages`}>
                                  HTML
                                </label>
                              </div>
                              <div>
                                <Field
                                  type="checkbox"
                                  name={`employees.${index}.languages`}
                                  value="css"
                                />
                                <label htmlFor={`employees.${index}.languages`}>
                                  CSS
                                </label>
                              </div>
                              <div>
                                <Field
                                  type="checkbox"
                                  name={`employees.${index}.languages`}
                                  value="javascript"
                                />
                                <label htmlFor={`employees.${index}.languages`}>
                                  JavaScript
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div>
                      <button
                        type="button"
                        className="button1"
                        onClick={() =>
                          arrayHelpers.insert(
                            formik.values.employees.length + 1,
                            {
                              name: "",
                              email: "",
                              password: "",
                              gender: "",
                              occupation: "",
                              languages: [],
                            }
                          )
                        }
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                );
              }}
            />
          </div>
          <div className="App">
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default App;
