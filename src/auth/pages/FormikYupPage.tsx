import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "The First Name must be least than 15 characters")
        .required("First Name is required"),
      lastName: Yup.string()
        .max(10, "The Last Name must be least than 15 characters")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Register</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name</label>
        <input
          {...getFieldProps("firstName")}
          type="text"
          placeholder="First Name"
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>

        <input
          {...getFieldProps("lastName")}
          type="text"
          placeholder="Last Name"
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>

        <input
          {...getFieldProps("email")}
          type="email"
          placeholder="Email Addres"
        />
        {errors.email && touched.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
