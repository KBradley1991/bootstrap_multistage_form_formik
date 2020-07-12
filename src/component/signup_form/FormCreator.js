import React from "react";
import Formik from "formik";

const FormCreator = (props) => {
  const componentArray = React.Children.toArray(props.children);
  const step = componentArray[0];

  return <>{step}</>;
};

export default FormCreator;
