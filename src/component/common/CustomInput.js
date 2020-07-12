import React from "react";
import { useField } from "formik";
import "./customInput.css";

const CustomInput = (props) => {
  //const [field, meta] = useField(props);
  return (
    <>
      <div className="input-group">
        <input {...props} />
      </div>
    </>
  );
};

export default CustomInput;
