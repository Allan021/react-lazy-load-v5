import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles.css";
export const RegisterFormikScreen = () => {
  return (
    <div>
      <h1>Register Screen</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El numero debe de contener mas de 2 digitos")
            .required(),
          email: Yup.string()
            .email("El correo contiene un formato invalido")
            .required("El email es requerido"),

          password1: Yup.string()
            .min(6, "La contraseña debe tener mas de 6 caracteres")
            .required("Contraseña es requerida"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")]) //esto hace referencia a otro tipo de validaciones mas importantes
            .required("Porfavor confirme su contraseña"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label={"Your Name"}
              name={"name"}
              placeholder="Ingresa tu nombre"
            />
            <MyTextInput
              label={"Your email"}
              name={"email"}
              type="email"
              placeholder="hola@example.com"
            />
            <MyTextInput
              type="password"
              label={"Your Password"}
              name={"password1"}
              placeholder="Ingresa tu contraseña"
            />
            <MyTextInput
              type="password"
              label={"Confirm your Password"}
              name={"password2"}
              placeholder="Repite tu contraseña"
            />
            <button type="submit">Submit</button>
            <button onClick={handleReset}>Resetear</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
