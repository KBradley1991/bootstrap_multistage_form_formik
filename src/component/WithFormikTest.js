import React from "react";
import { withFormik } from "formik";

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: "" }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
});

const MyEnhancedForm1 = () => {
  const testComponentArray = [];

  for (let i = 0; i < 2; i++) {
    testComponentArray.push(MyEnhancedForm);
  }

  // let's test something out
  const newArray1 = testComponentArray.map((hoc) => {
    const MyEnhancedForm1 = hoc(MyForm);

    return <MyEnhancedForm1 />;
  });
  //test up
  return (
    <>
      <h1>Sanity</h1>
      {newArray1[0]}
    </>
  );
};

export default MyEnhancedForm1;
