import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles.css";

export const FormikAbstractions = () => {
  return (
    <div>
      <h1>Formik Abstractions Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "The First Name must be least than 15 characters")
            .required("First Name is required"),
          lastName: Yup.string()
            .max(10, "The Last Name must be least than 15 characters")
            .required("Last Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          terms: Yup.boolean()
            .oneOf([true], "Acepte los terminos y condiciones")
            .required("Los terminos y condiciones son requeridos"),
          degrees: Yup.string()
            .notOneOf(["senior"], "La opcion senior no esta disponible")
            .required("Seleccione un grado de habilidad"),
        })}
      >
        {() => (
          <Form>
            <MyTextInput
              name="firstName"
              label="First Name"
              id="firstName"
              placeholder="Primer Name"
            />
            <MyTextInput
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              type="text"
            />
            <MyTextInput
              name="email"
              type="email"
              label="Email Addres"
              placeholder="owner@example.com"
            />

            <MySelect name="degrees" label="Jobs Degrees">
              <option value="">Select one thing</option>
              <option value="junior">Junior Developer</option>
              <option value="database">Admin Data Base</option>
              <option value="middle">Middle Developer</option>
              <option value="senior">Senior Developer</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terminos y Condiciones" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
