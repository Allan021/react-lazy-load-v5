import { ErrorMessage, useField } from "formik";

interface MySelectProps {
  label: string;
  className?: string;
  name: string;
  [x: string]: any; //este es un comodin para indicar cualquier tipo de propiedad en el futuro
}

export const MyCheckbox = ({ label, ...rest }: MySelectProps) => {
  const [field] = useField(rest);
  //field me retorna el onChamcge y onBlur y el meta me retorna los valores de los metadatos
  return (
    <>
      <label className={rest.className}>{label}</label>
      <select {...rest} {...field} />
      <ErrorMessage name={rest.name} component="span" />
    </>
  );
};
