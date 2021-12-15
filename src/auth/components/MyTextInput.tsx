import { ErrorMessage, useField } from "formik";

interface MyInputProps {
  label: string;
  placeholder?: string;
  className?: string;
  name: string;
  type?: "email" | "password" | "text";
  [x: string]: any; //este es un comodin para indicar cualquier tipo de propiedad en el futuro
}

export const MyTextInput = ({ label, ...rest }: MyInputProps) => {
  const [field] = useField(rest);
  //field me retorna el onVhamcge y onBlur y el meta me retorna los valores de los metadatos
  return (
    <>
      <label htmlFor={rest.id || rest.name}>{label}</label>
      <input {...rest} className="text-input" {...field} />
      <ErrorMessage name={rest.name} component="span" />
    </>
  );
};
