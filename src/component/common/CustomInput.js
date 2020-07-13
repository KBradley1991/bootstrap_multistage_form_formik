import React from "react";
import { useField } from "formik";
import "./customInput.css";

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  //console.log("field", field);
  // console.log("meta", meta);
  return (
    <>
      <div className="input-group">
        <input
          {...field}
          name={field.name}
          value={field.value || ""}
          onChange={field.onChange}
          {...props}
        />
      </div>
      {meta.error && meta.touched && (
        <div className="alert alert-danger" role="alert">
          <p className="error-message">{meta.error}</p>
        </div>
      )}
    </>
  );
};

export default CustomInput;
