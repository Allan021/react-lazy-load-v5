import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles.css";

export const FormikComponentPage = () => {
  return (
    <div>
      <h1>Formik Component Register</h1>
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
            <label htmlFor="firstName">Name</label>
            <Field name="firstName" placeholder="Your First Name" />
            <ErrorMessage name="firstName" component={"span"} />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Your Last Name" />
            <ErrorMessage name="lastName" component={"span"} />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="Your Email" />
            <ErrorMessage name="email" component={"span"} />

            <label htmlFor="email">Grado de Conocimiento</label>

            <Field name="degrees" as="select">
              <option value="">Select one thing</option>
              <option value="junior">Junior Developer</option>
              <option value="database">Admin Data Base</option>
              <option value="middle">Middle Developer</option>
              <option value="senior">Senior Developer</option>
            </Field>

            <ErrorMessage name="degrees" component={"span"} />
            <label htmlFor="terms">
              Terminos y condiciones
              <Field name="terms" type="checkbox" />
            </label>
            <ErrorMessage name="terms" component={"span"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
