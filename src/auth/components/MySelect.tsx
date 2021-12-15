import { ErrorMessage, useField } from "formik";

interface MySelectProps {
  label: string;
  className?: string;
  name: string;
  orientation?: "left" | "right";
  [x: string]: any; //este es un comodin para indicar cualquier tipo de propiedad en el futuro
}

export const MySelect = ({ label, ...rest }: MySelectProps) => {
  const [field] = useField({ ...rest, type: "checkbox" }); //unicamente puede ser de tipo texto, useField te retorna todo
  //field me retorna el onChamcge y onBlur y el meta me retorna los valores de los metadatos
  return (
    <>
      <label htmlFor={rest.id || rest.name}>
        {rest.orientation === "left" && label}
        <input {...field} />
        {rest.orientation === "right" && label}
      </label>
      <ErrorMessage name={rest.name} component="span" />
    </>
  );
};
