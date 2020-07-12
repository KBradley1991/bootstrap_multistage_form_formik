import React from "react";
import { Formik } from "formik";

const FormCreator = (props) => {
  const componentArray = React.Children.toArray(props.children);
  const step = componentArray[0];
  //console.log(step.props.validationSchema);

  return (
    <>
      <Formik
        initialValues={step.props.initValues}
        validationSchema={step.props.validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => <form onSubmit={props.handleSubmit}>{step}</form>}
      </Formik>
    </>
  );
};

export default FormCreator;
