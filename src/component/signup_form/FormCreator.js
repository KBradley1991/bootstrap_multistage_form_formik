import React from "react";
import { Formik } from "formik";

const FormCreator = ({ formStage, submitFn, ...props }) => {
  const componentArray = React.Children.toArray(props.children);
  //const step = componentArray[0];
  //console.log(step.props.validationSchema);

  return (
    <>
      <Formik
        initialValues={componentArray[formStage].props.initValues}
        validationSchema={componentArray[formStage].props.validationSchema}
        onSubmit={submitFn}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>{componentArray[formStage]}</form>
        )}
      </Formik>
    </>
  );
};

export default FormCreator;
